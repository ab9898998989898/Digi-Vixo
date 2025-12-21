import type { Metadata } from "next";
import TeamDetails from "@/components/team/TeamDetails";
import AdvisoryBoard from "@/components/team/phase4/AdvisoryBoard";

export const metadata: Metadata = {
    title: "Team | Digivixo",
    description: "Meet the founders of Digivixo, Abdullah and Hassan. Experts in global logistics and digital commerce.",
};

export default function TeamPage() {
    return (
        <main className="pt-20">
            <div className="py-32 px-6 text-center space-y-6 bg-black">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">The Visionaries</h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                    Building the infrastructure for the next generation of commerce.
                </p>
            </div>
            <TeamDetails />
            <AdvisoryBoard />
        </main>
    );
}
