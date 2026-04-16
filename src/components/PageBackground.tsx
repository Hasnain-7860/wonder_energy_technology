type PageBackgroundProps = {
  textureUrl: string
}

export function PageBackground({ textureUrl }: PageBackgroundProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 top-[-6px] z-0 min-h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute -inset-[10%] bg-white opacity-[0.02]" />
      <div
        className="absolute inset-0 bg-cover bg-no-repeat [background-position:52%_48%]"
        style={{ backgroundImage: `url(${textureUrl})` }}
      />
      <div className="absolute -inset-[10%] opacity-[0.28] [background-image:var(--wte-radial)] mix-blend-soft-light" />
    </div>
  )
}
