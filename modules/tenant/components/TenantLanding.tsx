import type { TenantSiteData } from "@/modules/tenant/services/tenantThemeService";

export function TenantLanding({ data }: { data: TenantSiteData }) {
  return (
    <div className="px-6 py-14 md:px-12">
      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-4xl">{data.logo}</div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">{data.name}</h1>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{data.heading}</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{data.subtitle}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["المقررات", "لوحة الطالب", "التقارير"].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
