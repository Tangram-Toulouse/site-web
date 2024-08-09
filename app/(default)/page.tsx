export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import Features01 from "@/components/features-01";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import PricingTabs from "@/components/pricing-tabs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import HeroAbout from "@/components/hero-about";
import TeamImages from "@/components/team-images";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroAbout />
      <TeamImages />
      <Features01 />
      <Features03 />
      <PricingTabs />
      <Team />
    </>
  );
}
