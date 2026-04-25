import { AboutHero } from "@/modules/platform/components/AboutHero";
import { AboutPartners } from "@/modules/platform/components/AboutPartners";
import { AboutStats } from "@/modules/platform/components/AboutStats";
import { AboutStory } from "@/modules/platform/components/AboutStory";
import { AboutTeam } from "@/modules/platform/components/AboutTeam";
import { AboutVisionMission } from "@/modules/platform/components/AboutVisionMission";
import { getServerMessages } from "@/shared/i18n/server";
export default async function AboutPage() {
  const { messages } = await getServerMessages();

  return (
    <main className="bg-white">
      <AboutHero content={messages.platform.about.hero} />
      <AboutStats content={messages.platform.about.stats} />
      <AboutStory content={messages.platform.about.story} />
      <AboutVisionMission content={messages.platform.about.visionMission} />
      <AboutPartners content={messages.platform.about.partners} />
      <AboutTeam content={messages.platform.about.team} />
    </main>
  );
}
