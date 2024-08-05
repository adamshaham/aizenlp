import Header from "../components/V4/Header";
import DesktopHeroLight1 from "../components/V4/DesktopHeroLight1";
import Content1 from "../components/V4/Content1";
import DesktopHeroLight from "../components/V4/DesktopHeroLight";
import DesktopLightCTA from "../components/V4/DesktopLightCTA";
import DesktopPARTNERLight from "../components/V4/DesktopPARTNERLight";
import DesktopTestimonialsLight from "../components/V4/DesktopTestimonialsLight";
import DesktopPricingLight from "../components/V4/DesktopPricingLight";
import DesktopContactLight from "../components/V4/DesktopContactLight";
import DesktopFooterDark from "../components/V4/DesktopFooterDark";

const V4 = () => {
  return (
    <div className="w-full relative bg-[#181818]1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <DesktopHeroLight1 />
      <div className="self-stretch h-px relative hidden" />
      <Content1 />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <DesktopHeroLight />
        <DesktopLightCTA />
        <DesktopPARTNERLight />
        <DesktopTestimonialsLight />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <DesktopPricingLight />
        <DesktopContactLight />
      </section>
      <DesktopFooterDark />
    </div>
  );
};

export default V4;
