import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import DesignPreview from "@/components/home/DesignPreview";
import TeamPreview from "@/components/home/TeamPreview";
import WhyChooseUs from "@/components/home/revamp/WhyChooseUs";
import Process from "@/components/home/revamp/Process";
import ImpactMetrics from "@/components/home/phase3/ImpactMetrics";
import GlobalMap from "@/components/home/phase3/GlobalMap";
import SuccessStories from "@/components/home/phase3/SuccessStories";
import AiProductPreview from "@/components/home/AiProductPreview";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ImpactMetrics />
      <WhyChooseUs />
      <GlobalMap />
      <ServicesPreview />
      <AiProductPreview />
      <Process />
      <SuccessStories />
      <DesignPreview />
      <TeamPreview />
    </main>
  );
}
