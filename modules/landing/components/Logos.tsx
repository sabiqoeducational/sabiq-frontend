type LogosProps = {
  items: string[];
};

export function Logos({ items }: LogosProps) {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-6 md:px-12">
      <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
        {items.map((logo) => (
          <span key={logo} className="text-sm font-semibold text-slate-500 md:text-base">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
