import {  HeroComponent } from "@/modules/platform/components/HeroComponent";
import { AboutPartners } from "@/modules/platform/ui/About/AboutPartners";
import { AboutStats } from "@/modules/platform/ui/About/AboutStats";
import { AboutStory } from "@/modules/platform/ui/About/AboutStory";
import { AboutTeam } from "@/modules/platform/ui/About/AboutTeam";
import { AboutVisionMission } from "@/modules/platform/ui/About/AboutVisionMission";
import { getServerMessages } from "@/shared/i18n/server";
export default async function AboutPage() {
  const { messages } = await getServerMessages();

  return (
    <main className="bg-white">
      <HeroComponent content={messages.platform.about.hero} />
      <AboutStats content={messages.platform.about.stats} />
      <AboutStory content={messages.platform.about.story} />
      <AboutVisionMission content={messages.platform.about.visionMission} />
      <AboutPartners content={messages.platform.about.partners} />
      <AboutTeam content={messages.platform.about.team} />
    </main>
  );
}
