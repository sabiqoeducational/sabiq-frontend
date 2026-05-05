import { ContactSection } from "@/modules/platform/ui/Contact/ContactSection";
import { getServerMessages } from "@/shared/i18n/server";
import { HeroComponent } from "@/modules/platform/components/HeroComponent";
import { OfficesSection } from "@/modules/platform/ui/Contact/OfficesSection";
export default async function ContactPage() {
  const { messages } = await getServerMessages();

  return (
    <main className="bg-white">
      <HeroComponent content={messages.platform.contact.hero} />
      <ContactSection content={messages.platform.contact.secondary} />
      <OfficesSection content={messages.platform.contact.offices} />
    </main>
  );
}
