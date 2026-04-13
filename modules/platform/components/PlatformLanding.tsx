import type { Messages } from "@/shared/i18n/messages";

type PlatformLandingProps = {
  copy: Messages["platform"]["landing"];
};

export function PlatformLanding({ copy }: PlatformLandingProps) {
  return (
    <div className="space-y-14 px-6 py-12 md:px-12">
      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <h1 className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          {copy.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/register"
            className="rounded-xl bg-[var(--tenant-primary)] px-6 py-3 text-white"
          >
            {copy.ctaPrimary}
          </a>
          <a href="/contact" className="rounded-xl border border-slate-300 px-6 py-3">
            {copy.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {copy.stats.map((item) => (
          <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-3xl font-bold text-[var(--tenant-primary)]">{item.value}</p>
            <p className="mt-2 text-slate-600">{item.label}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
