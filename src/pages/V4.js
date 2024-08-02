import Header from "../components/Header";
import DesktopHeroLight1 from "../components/DesktopHeroLight1";
import Content1 from "../components/Content1";
import DesktopHeroLight from "../components/DesktopHeroLight";
import DesktopLightCTA from "../components/DesktopLightCTA";
import DesktopPARTNERLight from "../components/DesktopPARTNERLight";
import DesktopTestimonialsLight from "../components/DesktopTestimonialsLight";
import DesktopPricingLight from "../components/DesktopPricingLight";
import DesktopContactLight from "../components/DesktopContactLight";
import DesktopFooterDark from "../components/DesktopFooterDark";

const V4 = () => {
  return (
    <div className="w-full relative bg-dark-background1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
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
