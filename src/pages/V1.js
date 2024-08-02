import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Expertise from "../components/Expertise";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";

const V1 = () => {
  return (
    <div className="w-full relative bg-neutral-n0 overflow-hidden flex flex-col items-end justify-start gap-[73.1px] leading-[normal] tracking-[normal] gap-[18px] gap-[37px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.6px] box-border max-w-full">
        <div className="flex-1 bg-neutral-n0 flex flex-col items-start justify-start pt-0 px-0 pb-[76.6px] box-border relative gap-[77.1px] max-w-full mq1050:pb-[50px] mq1050:box-border gap-[19px] gap-[39px] mq750:pb-8 mq750:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <Navbar />
          <Content />
        </div>
      </section>
      <Expertise />
      <Testimonials />
      <Services />
      <Pricing />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <Footer />
    </div>
  );
};

export default V1;
