import Navbar1Fixed from "../components/V/Navbar1Fixed";
import HeroBanner from "../components/V/HeroBanner";
import PartnerSection from "../components/V/PartnerSection";
import ValueSection from "../components/V/ValueSection";
import TestimonialSection from "../components/V/TestimonialSection";
import TrialBanner from "../components/V/TrialBanner";
import SolutionSection from "../components/V/SolutionSection";
import FrameComponent6 from "../components/V/FrameComponent6";
import Footer1 from "../components/V/Footer1";

const V = () => {
  return (
    <div className="w-full relative bg-neutral-n0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar1Fixed />
      <HeroBanner />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <PartnerSection />
        <ValueSection />
        <TestimonialSection />
        <TrialBanner />
      </section>
      <SolutionSection />
      <FrameComponent6 />
      <Footer1 />
    </div>
  );
};

export default V;
