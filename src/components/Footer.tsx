import type { JSX } from 'react'
import { useEffect, useState } from 'react'
import footerArt from '../assets/footer.svg'
import { client } from '../sanityClient'

const fontJakarta = "font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif]"

const TELEGRAM_HREF = 'https://t.me/'
const X_HREF = 'https://x.com/'
const FOOTER_SOCIAL_QUERY = `*[_type == "footerSettings"] | order(_updatedAt desc) {
  socialLinks[]{
    _key,
    platform,
    url
  }
}`

const FOOTER_SOCIAL_PLATFORMS = [
  'tiktok',
  'snapchat',
  'reddit',
  'facebook',
  'x',
  'instagram',
  'github',
  'youtube',
] as const

type FooterSocialPlatform = (typeof FOOTER_SOCIAL_PLATFORMS)[number]

const FOOTER_PLATFORM_SET = new Set<string>(FOOTER_SOCIAL_PLATFORMS)

type FooterSocialRow = {
  _key?: string
  platform: string
  url: string
}

function isValidSocialRow(row: FooterSocialRow | null | undefined): row is FooterSocialRow {
  if (!row?.platform || !FOOTER_PLATFORM_SET.has(row.platform)) return false
  const url = row.url?.trim() ?? ''
  return url.length > 0
}
function mergeSocialLinksFromDocuments(
  docs: { socialLinks?: FooterSocialRow[] | null }[] | null | undefined,
): FooterSocialRow[] {
  if (!docs?.length) return []
  const out: FooterSocialRow[] = []
  const seen = new Set<string>()
  for (const doc of docs) {
    const rows = doc?.socialLinks
    if (!rows?.length) continue
    for (const row of rows) {
      if (!isValidSocialRow(row)) continue
      const url = row.url.trim()
      const dedupeKey = `${row.platform}\n${url}`
      if (seen.has(dedupeKey)) continue
      seen.add(dedupeKey)
      out.push({ _key: row._key, platform: row.platform, url })
    }
  }
  return out
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function IconSnapchat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 10h.01M15 10h.01M12 3c-2.4 0-4.5 1.6-5 4-.2 1.1-.1 2.1.2 3.1.2.7-.1 1.4-.7 1.8-.5.3-1.1.5-1.7.6-.4.1-.6.5-.4.9.3.6 1 .9 1.7.9h.8c.3 0 .5.2.6.5l.4 1.2c.1.3.4.5.7.5h2.2c.3 0 .6-.2.7-.5l.4-1.2c.1-.3.3-.5.6-.5h.8c.7 0 1.4-.3 1.7-.9.2-.4 0-.8-.4-.9-.6-.1-1.2-.3-1.7-.6-.6-.4-.9-1.1-.7-1.8.3-1 .4-2 .2-3.1-.5-2.4-2.6-4-5-4z"
      />
    </svg>
  )
}

function IconReddit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.833-.599 1.197a11.55 11.55 0 0 0-6.832 3.26l-.833-.833a1.25 1.25 0 1 1 1.768-1.768l.933.933a9.018 9.018 0 0 1 6.226-2.55c.23-.001.42-.002.59-.002zm-10.01 7.256a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm10 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-5 2.5c-1.657 0-3 1.12-3 2.5s1.343 2.5 3 2.5 3-1.12 3-2.5-1.343-2.5-3-2.5z" />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const SOCIAL_ROWS: {
  platform: FooterSocialPlatform
  name: string
  Icon: (props: { className?: string }) => JSX.Element
}[] = [
  { platform: 'tiktok', name: 'TikTok', Icon: IconTikTok },
  { platform: 'snapchat', name: 'Snapchat', Icon: IconSnapchat },
  { platform: 'reddit', name: 'Reddit', Icon: IconReddit },
  { platform: 'facebook', name: 'Facebook', Icon: IconFacebook },
  { platform: 'x', name: 'X', Icon: IconX },
  { platform: 'instagram', name: 'Instagram', Icon: IconInstagram },
  { platform: 'github', name: 'GitHub', Icon: IconGitHub },
  { platform: 'youtube', name: 'YouTube', Icon: IconYouTube },
]

export default function Footer() {
  const [socialLinks, setSocialLinks] = useState<FooterSocialRow[]>([])

  useEffect(() => {
    let cancelled = false

    client
      .fetch<{ socialLinks?: FooterSocialRow[] | null }[]>(FOOTER_SOCIAL_QUERY, {}, { useCdn: false })
      .then((docs) => {
        if (cancelled) return
        setSocialLinks(mergeSocialLinksFromDocuments(docs))
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (import.meta.env.DEV) {
          console.error('[Footer] Sanity fetch failed:', err)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const showSocialNav = socialLinks.length > 0

  return (
    <footer
      id="contact"
      className="relative "
    >
      <div/>

      <div className="relative z-999 mx-auto w-full max-w-[1420px] px-4 top-[-100px] sm:px-6">
        <div className="relative mx-auto w-full max-w-[1420px]">
          <div className="relative z-[1] w-full overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src={footerArt}
              alt=""
              className="block h-auto w-full object-contain object-top"
              width={1290}
              height={446}
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 pb-[min(26%,5.5rem)] pt-[min(14%,3.25rem)] text-center sm:px-8 sm:pb-[min(24%,6rem)] sm:pt-[min(12%,3.75rem)] md:px-10">
              <h2 className="font-twobit-only relative z-[2] mx-auto max-w-[24ch] text-[clamp(0.95rem,3.2vw,1.45rem)] font-normal leading-snug tracking-[0.12em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:tracking-[0.16em]">
                Join The Community
              </h2>
              <div className="pointer-events-auto relative z-[2] mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <a
                  href={TELEGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-twobit-only inline-flex min-h-[42px] min-w-[132px] items-center justify-center rounded-none bg-[#0a0c0d] px-5 py-2.5 text-center text-[10px] tracking-[0.14em] text-white no-underline transition-opacity hover:opacity-90 sm:min-h-[44px] sm:min-w-[156px] sm:text-[11px] sm:tracking-[0.18em] md:text-xs md:tracking-[0.2em]"
                >
                  TELEGRAM
                </a>
                <a
                  href={X_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-twobit-only inline-flex min-h-[42px] min-w-[132px] items-center justify-center rounded-none bg-[#0a0c0d] px-5 py-2.5 text-center text-[10px] tracking-[0.14em] text-white no-underline transition-opacity hover:opacity-90 sm:min-h-[44px] sm:min-w-[156px] sm:text-[11px] sm:tracking-[0.18em] md:text-xs md:tracking-[0.2em]"
                >
                  X (TWITTER)
                </a>
              </div>
            </div>
          </div>
        </div>

        {showSocialNav ? (
          <nav
            className="mx-auto mt-12 flex max-w-[1420px] flex-wrap justify-center gap-3 sm:mt-14 sm:gap-4"
            aria-label="Social links"
          >
            {socialLinks.map((row, index) => {
              const meta = SOCIAL_ROWS.find((r) => r.platform === row.platform)
              if (!meta) return null
              const { name, Icon } = meta
              const href = row.url.trim()
              return (
                <a
                  key={row._key ?? `${row.platform}-${index}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.1] bg-[rgba(12,16,18,0.72)] text-[#c5f4f6] transition-colors hover:border-[#4FD1C5] hover:bg-[#4FD1C5] hover:text-white sm:h-12 sm:w-12"
                  aria-label={name}
                >
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                </a>
              )
            })}
          </nav>
        ) : null}

        <div className="mx-auto mt-12 flex max-w-[1420px] flex-col items-center border-t border-white/[0.12] pt-8 text-center sm:mt-14 sm:pt-9">
          <p
            className={`${fontJakarta} text-[11px] font-normal leading-relaxed text-white/55 sm:text-xs`}
          >
            ©2024 Copyright WONDER ENERGY TECHNOLOGY - WTE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
