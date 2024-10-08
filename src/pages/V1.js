import Navbar from "../components/V1/Navbar";
import Content from "../components/V1/Content";
import Expertise from "../components/V1/Expertise";
import Testimonials from "../components/V1/Testimonials";
import Services from "../components/V1/Services";
import Pricing from "../components/V1/Pricing";
import FrameComponent1 from "../components/V1/FrameComponent1";
import FrameComponent2 from "../components/V1/FrameComponent2";
import FrameComponent3 from "../components/V1/FrameComponent3";
import FrameComponent4 from "../components/V1/FrameComponent4";
import FrameComponent5 from "../components/V1/FrameComponent5";
import Footer from "../components/V1/Footer";

const V1 = () => {
  return (
    <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-end justify-start gap-[73.1px] leading-[normal] tracking-[normal] gap-[18px] gap-[37px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.6px] box-border max-w-full">
        <div className="flex-1 bg-[#fff] flex flex-col items-start justify-start pt-0 px-0 pb-[76.6px] box-border relative gap-[77.1px] max-w-full mq1050:pb-[50px] mq1050:box-border gap-[19px] gap-[39px] mq750:pb-8 mq750:box-border">
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
