import { getServerMessages } from "@/shared/i18n/server";

export default async function AboutPage() {
  const { messages } = await getServerMessages();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold text-slate-900">{messages.platform.about.title}</h1>
      <p className="mt-4 leading-8 text-slate-600">{messages.platform.about.body}</p>
    </main>
  );
}
