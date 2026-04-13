import { headers } from "next/headers";
import { Features } from "@/modules/landing/components/Features";
import { Hero } from "@/modules/landing/components/Hero";
import { Logos } from "@/modules/landing/components/Logos";
import { Stats } from "@/modules/landing/components/Stats";
import { Testimonials } from "@/modules/landing/components/Testimonials";
import { getLandingContentCached } from "@/modules/landing/hooks/useLandingContent";

export default async function Home() {
  const headerStore = await headers();
  const tenant = headerStore.get("x-tenant") ?? "public";
  const content = await getLandingContentCached(tenant);

  return (
    <div className="min-h-full bg-slate-50">
      <main className="mx-auto w-full max-w-7xl pb-12">
        <Hero {...content.hero} />
        <Logos items={content.logos} />
        <Stats items={content.stats} />
        <Features items={content.features} />
        <Testimonials items={content.testimonials} />
      </main>
    </div>
  );
}
