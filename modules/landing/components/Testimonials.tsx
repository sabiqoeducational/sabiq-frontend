import type { TestimonialItem } from "@/modules/landing/services/landingService";

type TestimonialsProps = {
  items: TestimonialItem[];
};

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="px-6 py-14 md:px-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">آراء العملاء</h2>
        <p className="mt-2 text-slate-600">تجارب حقيقية من المدارس والمؤسسات التعليمية.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm leading-7 text-slate-700">
              &ldquo;{item.content}&rdquo;
            </p>
            <div className="mt-4">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
