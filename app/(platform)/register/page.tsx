import { getServerMessages } from "@/shared/i18n/server";

export default async function RegisterPage() {
  const { messages } = await getServerMessages();
  const r = messages.platform.register;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold text-slate-900">{r.title}</h1>
      <form className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={r.fullName}
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={r.email}
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={r.organization}
        />
        <input
          type="password"
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder={r.password}
        />
        <button className="rounded-xl bg-[var(--tenant-primary)] px-5 py-2 text-white" type="button">
          {r.submit}
        </button>
      </form>
    </main>
  );
}
