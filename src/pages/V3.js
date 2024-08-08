import FrameComponent7 from "../components/V3/FrameComponent7";
import Headline from "../components/V3/Headline";
import SubHeading from "../components/V3/SubHeading";
import CallToAction from "../components/V3/CallToAction";
import FrameComponent8 from "../components/V3/FrameComponent8";
import FrameComponent9 from "../components/V3/FrameComponent9";
import FrameComponent10 from "../components/V3/FrameComponent10";
import FrameComponent11 from "../components/V3/FrameComponent11";
import FrameComponent12 from "../components/V3/FrameComponent12";
import FrameComponent13 from "../components/V3/FrameComponent13";
import LightFOOTER from "../components/V3/LightFOOTER";

const V3 = () => {
  return (
    <div className="w-[1440px]] relative bg-[#181818] overflow-hidden flex flex-col items-end justify-start pt-[22.2px] px-0 pb-0 box-border gap-[75.4px] leading-[normal] tracking-[normal] gap-[19px] gap-[38px]">
      <FrameComponent7 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
        <div className=" w-[726.7px] flex flex-col items-end justify-start gap-[15.1px] max-w-full">
          <Headline />
          <div className=" self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <SubHeading/>
          </div>
        </div>
      </section>
      <CallToAction />
      <FrameComponent8 />
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent11 />
      <FrameComponent12 />
      <FrameComponent13 />
      <LightFOOTER />
    </div>
  );
};

export default V3;
