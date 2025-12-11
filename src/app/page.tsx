import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import DigitalProducts from "@/components/home/DigitalProducts";
import TeamPreview from "@/components/home/TeamPreview";
import WhyChooseUs from "@/components/home/revamp/WhyChooseUs";
import Process from "@/components/home/revamp/Process";
import ImpactMetrics from "@/components/home/phase3/ImpactMetrics";
import GlobalMap from "@/components/home/phase3/GlobalMap";
import SuccessStories from "@/components/home/phase3/SuccessStories";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ImpactMetrics />
      <WhyChooseUs />
      <GlobalMap />
      <ServicesPreview />
      <Process />
      <SuccessStories />
      <DigitalProducts />
      <TeamPreview />
    </main>
  );
}
