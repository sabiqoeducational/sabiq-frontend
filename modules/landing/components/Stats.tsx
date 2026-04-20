import type { StatItem } from "@/modules/landing/services/landingService";

type StatsProps = {
  items: StatItem[];
};

export function Stats({ items }: StatsProps) {
  return (
    <section className="px-6 py-12 md:px-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-3xl font-bold text-[var(--tenant-primary)]">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
