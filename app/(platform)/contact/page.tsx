import { getServerMessages } from "@/shared/i18n/server";

export default async function ContactPage() {
  const { messages } = await getServerMessages();
  const c = messages.platform.contact;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold text-slate-900">{c.title}</h1>
      <form className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={c.name}
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={c.email}
        />
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={c.message}
        />
        <button className="rounded-xl bg-[var(--tenant-primary)] px-5 py-2 text-white" type="button">
          {c.submit}
        </button>
      </form>
    </main>
  );
}
