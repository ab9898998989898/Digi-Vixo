import BrandStory from "@/components/about/BrandStory";
import MissionVision from "@/components/about/MissionVision";
import Certifications from "@/components/about/phase4/Certifications";
import Timeline from "@/components/about/Timeline";
import FounderPhilosophy from "@/components/about/FounderPhilosophy";
import TeamPreview from "@/components/home/TeamPreview";
import CorporateGovernance from "@/components/about/phase3/CorporateGovernance";
import LeadershipPrinciples from "@/components/about/phase3/LeadershipPrinciples";

export const metadata = {
    title: "About Us | Digivixo",
    description: "Learn about Digivixo's journey, mission, and vision to revolutionize global commerce.",
};

export default function AboutPage() {
    return (
        <main className="flex flex-col pt-20">
            <BrandStory />
            <MissionVision />
            <CorporateGovernance />
            <Certifications />
            <Timeline />
            <LeadershipPrinciples />
            <FounderPhilosophy />
            {/* Reusing TeamPreview as requested for Team content, or specific About-Team link */}
            <TeamPreview />
        </main>
    );
}
