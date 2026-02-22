import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/templates/store/home-page/hero";
import FeatureGrid from "@/components/templates/store/home-page/feature-grid";
import Collections from "@/components/templates/store/home-page/collections";
import CtaBanner from "@/components/templates/store/home-page/cta-banner";

export const Route = createFileRoute("/(store)/_layout/")({ component: App });

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureGrid />
      <Collections />
      <CtaBanner />
    </div>
  );
}
