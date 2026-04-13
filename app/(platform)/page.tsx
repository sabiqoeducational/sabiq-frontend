import { PlatformLanding } from "@/modules/platform/components/PlatformLanding";
import { getServerMessages } from "@/shared/i18n/server";

export default async function PlatformHomePage() {
  const { messages } = await getServerMessages();

  return (
    <main className="mx-auto w-full max-w-7xl">
      <PlatformLanding copy={messages.platform.landing} />
    </main>
  );
}
