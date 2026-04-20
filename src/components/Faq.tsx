import { useEffect, useId, useState } from "react";
import { client } from "../sanityClient";

type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

type FaqDoc = {
  _id: string;
  question: string;
  answer: string;
  tier?: string;
  order?: number;
};

const FAQ_QUERY = `*[_type == "faq"]{
  _id,
  question,
  answer,
  tier,
  order
}`;

function byOrder(a: { order?: number }, b: { order?: number }) {
  return (a.order ?? 999) - (b.order ?? 999);
}

function FaqAccordionBlock({
  item,
  openId,
  onToggle,
}: {
  item: FaqEntry;
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  const isOpen = openId === item.id;

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/[0.12] bg-white/[0.08] backdrop-blur-md ">
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        className="
    flex w-full items-center justify-between
    h-[72px] sm:h-[90px] lg:h-[116px]
    px-4 sm:px-6 lg:px-8
    text-left transition-all duration-200
  "
      >
        <span
          className={`
      font-twobit-only
      text-[14px] sm:text-[18px] lg:text-[30px]
      tracking-[0.12em] sm:tracking-[0.16em] lg:tracking-[0.2em]
      leading-snug
      ${
        isOpen
          ? "bg-gradient-to-b from-[#5CE1E6] to-[#35A0A4] bg-clip-text text-transparent"
          : "text-white"
      }
    `}
        >
          {item.question}
        </span>
        <div
          className="flex items-center justify-center
    h-[32px] w-[32px]
    sm:h-[40px] sm:w-[40px]
    lg:h-[50px] lg:w-[50px]"
        >
          <svg
            className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[28px] lg:h-[28px] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-8 pb-6 text-[16px] text-white/80">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function docsToEntries(docs: FaqDoc[]): FaqEntry[] {
  return docs.map((d) => ({
    id: d._id,
    question: d.question,
    answer: d.answer,
  }));
}

export default function Faq() {
  const headingId = useId();
  const [openId, setOpenId] = useState<string | null>(null);
  const [extraVisible, setExtraVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [mainItems, setMainItems] = useState<FaqEntry[]>([]);
  const [collapsedItems, setCollapsedItems] = useState<FaqEntry[]>([]);

  useEffect(() => {
    let cancelled = false;

    client
      .fetch<FaqDoc[]>(FAQ_QUERY)
      .then((rows) => {
        if (cancelled) return;
        const primary = rows
          .filter((r) => r.tier !== "extra")
          .sort(byOrder);
        const extra = rows.filter((r) => r.tier === "extra").sort(byOrder);

        const hasPrimary = primary.length > 0;
        const main = hasPrimary ? primary : extra;
        const collapsed = hasPrimary ? extra : [];

        setMainItems(docsToEntries(main));
        setCollapsedItems(docsToEntries(collapsed));
        setFetchError(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        if (import.meta.env.DEV) {
          console.error("[FAQ] Sanity fetch failed:", err);
        }
        setFetchError(true);
        setMainItems([]);
        setCollapsedItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const showMoreButton = collapsedItems.length > 0;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const statusMessage = loading
    ? "Loading…"
    : fetchError
      ? "Could not load FAQs. Please try again later."
      : mainItems.length === 0
        ? "No FAQs published yet."
        : null;

  return (
    <section id="faqs" aria-labelledby={headingId}>
      <div className="relative z-10 mx-auto w-full max-w-[720px] md:max-w-[900px] lg:max-w-[1100px] px-4 sm:px-6 h-100% pb-110">
        <h2
          id={headingId}
          className="font-twobit-only text-center text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[0.22em] text-white"
        >
          FAQ
        </h2>

        <div className="relative mt-10 pb-8 sm:mt-12 sm:pb-10">
          {statusMessage ? (
            <p className="text-center text-[16px] text-white/70">
              {statusMessage}
            </p>
          ) : (
            <div className="flex flex-col gap-3 sm:gap-4">
              {mainItems.map((item) => (
                <FaqAccordionBlock
                  key={item.id}
                  item={item}
                  openId={openId}
                  onToggle={toggle}
                />
              ))}

              {extraVisible
                ? collapsedItems.map((item) => (
                    <FaqAccordionBlock
                      key={item.id}
                      item={item}
                      openId={openId}
                      onToggle={toggle}
                    />
                  ))
                : null}

              {showMoreButton ? (
                <div
                  className="
  overflow-hidden
  rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]
  border border-white/[0.12]
  bg-white/[0.08]
  backdrop-blur-md
  hover:bg-white/[0.12]
  transition
"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setExtraVisible((v) => !v);
                      setOpenId(null);
                    }}
                    aria-expanded={extraVisible}
                    className="
      flex w-full items-center justify-between
      h-[72px] sm:h-[90px] lg:h-[116px]
      px-4 sm:px-6 lg:px-8
      text-left
    "
                  >
                    <span
                      className="
      font-twobit-only
      text-[14px] sm:text-[18px] lg:text-[30px]
      tracking-[0.12em] sm:tracking-[0.16em] lg:tracking-[0.2em]
      text-white
    "
                    >
                      {extraVisible ? "Show less" : "Show more"}
                    </span>
                    <div
                      className="
      flex items-center justify-center
      h-[32px] w-[32px]
      sm:h-[40px] sm:w-[40px]
      lg:h-[50px] lg:w-[50px]
    "
                    >
                      <svg
                        className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[28px] lg:h-[28px] transition-transform duration-200 ${
                          extraVisible ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
