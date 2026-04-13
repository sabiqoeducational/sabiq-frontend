export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold text-slate-900">تواصل معنا</h1>
      <form className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="الاسم"
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="البريد الإلكتروني"
        />
        <textarea
          className="min-h-32 w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="رسالتك"
        />
        <button className="rounded-xl bg-[var(--tenant-primary)] px-5 py-2 text-white" type="button">
          إرسال
        </button>
      </form>
    </main>
  );
}
