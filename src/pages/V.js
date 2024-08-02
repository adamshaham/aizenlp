import Navbar1Fixed from "../components/Navbar1Fixed";
import HeroBanner from "../components/HeroBanner";
import PartnerSection from "../components/PartnerSection";
import ValueSection from "../components/ValueSection";
import TestimonialSection from "../components/TestimonialSection";
import TrialBanner from "../components/TrialBanner";
import SolutionSection from "../components/SolutionSection";
import FrameComponent6 from "../components/FrameComponent6";
import Footer1 from "../components/Footer1";

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
