export default function RegisterPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold text-slate-900">إنشاء حساب جديد</h1>
      <form className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="الاسم الكامل"
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="البريد الإلكتروني"
        />
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="اسم المؤسسة"
        />
        <input
          type="password"
          className="w-full rounded-xl border border-slate-300 px-3 py-2"
          placeholder="كلمة المرور"
        />
        <button className="rounded-xl bg-[var(--tenant-primary)] px-5 py-2 text-white" type="button">
          إنشاء الحساب
        </button>
      </form>
    </main>
  );
}
