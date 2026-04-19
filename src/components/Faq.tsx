import { useId, useState } from "react";

type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

const PRIMARY_FAQ: FaqEntry[] = [
  {
    id: "wte",
    question: "What is WTE Token?",
    answer:
      "WTE Token is the native utility token of the Wonder Energy Technology ecosystem. It is used across our platforms for payments, rewards, and governance as the project roadmap expands.",
  },
  {
    id: "work",
    question: "How does it work?",
    answer:
      "You can acquire WTE through supported sales and exchanges, hold it in a compatible wallet, and use it within WTE Mall and partner services. Smart contracts and published tokenomics define supply and allocations.",
  },
  {
    id: "benefit",
    question: "How do I benefit from holding WTE Token?",
    answer:
      "Holders may access ecosystem benefits such as marketplace utility, future staking or reward programs where offered, and participation in community initiatives as announced by the team.",
  },
];

const EXTRA_FAQ: FaqEntry[] = [
  {
    id: "trade",
    question: "Is WTE Token tradeable?",
    answer:
      "Liquidity and listing details are announced on official channels. Always verify contract addresses and trade only on supported venues.",
  },
  {
    id: "wallet",
    question: "Which wallet should I use?",
    answer:
      "Use any BNB Chain–compatible wallet that supports the token standard used by WTE. Keep your seed phrase secure and double-check network before sending.",
  },
];

function FaqAccordionBlock({
  item,
  openId,
  onToggle,
}: {
  item: FaqEntry;
  openId: string | null;
  onToggle: (id: string) => void;
  accentWhenClosed: boolean;
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

export default function Faq() {
  const headingId = useId();
  const [openId, setOpenId] = useState<string | null>(null);
  const [extraVisible, setExtraVisible] = useState(false);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" aria-labelledby={headingId} >
      {/* <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_42%_at_50%_0%,rgba(32,120,125,0.42)_0%,rgba(15,45,47,0.18)_45%,transparent_72%)]"
        aria-hidden
      /> */}
      <div className="relative z-10 mx-auto w-full max-w-[720px] md:max-w-[900px] lg:max-w-[1100px] px-4 sm:px-6 h-100% pb-110">
        <h2
          id={headingId}
          className="font-twobit-only text-center text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[0.22em] text-white"
        >
          FAQ
        </h2>

        <div className="relative mt-10 pb-8 sm:mt-12 sm:pb-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            {PRIMARY_FAQ.map((item, index) => (
              <FaqAccordionBlock
                key={item.id}
                item={item}
                openId={openId}
                onToggle={toggle}
                accentWhenClosed={index === 0}
              />
            ))}

            {extraVisible
              ? EXTRA_FAQ.map((item) => (
                  <FaqAccordionBlock
                    key={item.id}
                    item={item}
                    openId={openId}
                    onToggle={toggle}
                    accentWhenClosed={false}
                  />
                ))
              : null}

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
          </div>

          {/* <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(220px,52%)] bg-gradient-to-b from-transparent via-black/55 to-black sm:h-[min(240px,48%)]"
            aria-hidden
          /> */}
        </div>
      </div>
     
    </section>
  );
}
