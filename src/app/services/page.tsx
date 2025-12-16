import ServiceSection from "@/components/services/ServiceSection";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import DropshippingDeepDive from "@/components/services/phase3/DropshippingDeepDive";
import WholesaleDeepDive from "@/components/services/phase3/WholesaleDeepDive";
import DigitalProductsDeepDive from "@/components/services/phase4/DigitalProductsDeepDive";
import DigitalServicesDeepDive from "@/components/services/phase4/DigitalServicesDeepDive";
import TechStackGrid from "@/components/services/phase4/TechStackGrid";
import SLASpecs from "@/components/services/phase4/SLASpecs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Digivixo",
    description: "Explore Digivixo's premium services: Dropshipping, Wholesale, and Digital Products.",
};

export default function ServicesPage() {
    return (
        <main className="pt-20">
            <div className="py-24 px-6 text-center space-y-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-black">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Our Expertise</h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                    Tailored solutions to elevate your commerce game.
                </p>
            </div>

            <ServiceSection
                id="dropshipping"
                title="Dropshipping Services"
                description="We streamline your supply chain with our elite dropshipping network. From product sourcing to final delivery, we handle the logistics so you can focus on marketing and growth."
                imageSrc="/dropship.png"
                features={[
                    "Global Supplier Network",
                    "Automated Order Fulfillment",
                    "Quality Control Inspections",
                    "Fast International Shipping",
                    "Seamless Shopify Integration"
                ]}
            />
            <DropshippingDeepDive />

            <ServiceProcess />

            <ServiceSection
                id="wholesale"
                title="Wholesale Solutions"
                description="Scale your inventory with our B2B wholesale management. Access bulk pricing and exclusive products to maximize your profit margins."
                imageSrc="/wholesale.jpg"
                reversed
                features={[
                    "Competitive Bulk Pricing",
                    "Dedicated Account Manager",
                    "Custom Branding Options",
                    "Logistics & Warehousing",
                    "Flexible Payment Terms"
                ]}
            />
            <WholesaleDeepDive />
            <TechStackGrid />
            <SLASpecs />

            <ServiceSection
                id="digital"
                title="Digital Products"
                description="Accelerate your learning and business setup with our premium digital assets. Ebooks, templates, and guides crafted by industry leaders."
                imageSrc="/digital-products.jpg"
                features={[
                    "Comprehensive E-books",
                    "Business Templates & Checklists",
                    "AI-Powered Tools & Prompts",
                    "Marketing Strategy Guides",
                    "Exclusive Video Courses"
                ]}
            />
            <DigitalProductsDeepDive />

            <ServiceSection
                id="digital-services"
                title="Digital Services"
                description="Accelerate your business growth with our premium digital services."
                imageSrc="/digital-services.png"
                reversed
                features={[
                    "Website Development",
                    "Ai Chatbot Development",
                    "Shopify Store Development",
                    "Amazon Store Development",
                    "Personal Graphic Design",
                    "Social Media Management"
                ]}
            />
            <DigitalServicesDeepDive />

            <ServiceFAQ />
        </main>
    );
}
