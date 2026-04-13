import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  imageUrl: string;
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
}: HeroProps) {
  return (
    <section className="grid items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-12">
      <div className="space-y-6">
        <h1 className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="text-base text-slate-600 md:text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-[var(--tenant-primary)] px-6 py-3 text-white transition hover:opacity-90">
            {primaryCta}
          </button>
          <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-800 transition hover:bg-slate-100">
            {secondaryCta}
          </button>
        </div>
      </div>

      <div className="relative h-[260px] overflow-hidden rounded-2xl md:h-[360px]">
        <Image
          src={imageUrl}
          alt="صورة توضيحية للمنصة"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
