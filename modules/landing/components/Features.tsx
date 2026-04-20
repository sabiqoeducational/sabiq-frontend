import type { FeatureItem } from "@/modules/landing/services/landingService";

type FeaturesProps = {
  items: FeatureItem[];
};

export function Features({ items }: FeaturesProps) {
  return (
    <section className="bg-slate-50 px-6 py-14 md:px-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">وحدات المنصة</h2>
        <p className="mt-2 text-slate-600">كل ما تحتاجه لإدارة المنظومة التعليمية بكفاءة.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-3 text-2xl">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
