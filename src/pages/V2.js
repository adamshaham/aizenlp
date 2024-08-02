import FrameComponent14 from "../components/FrameComponent14";
import Features from "../components/Features";
import Customer from "../components/Customer";
import Pricing1 from "../components/Pricing1";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent17 from "../components/FrameComponent17";
import BottomFooter from "../components/BottomFooter";
import FooterSection from "../components/FooterSection";

const V2 = () => {
  return (
    <div className="w-full relative bg-neutral-n0 overflow-hidden flex flex-col items-start justify-start gap-[14.9px] leading-[normal] tracking-[normal]">
      <img
        className="mt-[-14.9px] ml-[-147.9px] w-0 h-0 relative shrink-0"
        alt=""
      />
      <FrameComponent14 />
      <Features />
      <Customer />
      <Pricing1 />
      <FrameComponent16 />
      <FrameComponent17 />
      <footer className="self-stretch bg-black1 flex flex-col items-center justify-start pt-[87.5px] px-5 pb-[30px] box-border gap-[70px] max-w-full shrink-0 text-left text-lgi-3 text-neutral-n0 font-poppins mq450:pt-[57px] mq450:pb-5 mq450:box-border gap-[17px] gap-[35px]">
        <img
          className="w-[1400px] h-[441px] relative hidden max-w-full"
          alt=""
          src="/rectangle-34.svg"
        />
        <div className="w-[997.5px] flex flex-row items-start justify-between gap-5 max-w-full mq1125:flex-wrap mq1125:justify-center">
          <BottomFooter />
          <div className="w-[306.6px] flex flex-row items-start justify-start gap-[69.6px] gap-[35px]">
            <div className="w-[101px] flex flex-col items-start justify-start gap-[26.4px]">
              <div className="self-stretch relative leading-[140%] font-medium z-[1]">
                Resources
              </div>
              <div className="flex flex-col items-start justify-start gap-[8.1px] text-base-8 text-darkoverlayelement-do70 font-body-base-regular">
                <div className="relative leading-[26px] inline-block min-w-[64px] z-[1]">
                  services
                </div>
                <div className="relative leading-[26px] inline-block min-w-[52px] z-[1]">
                  Pricing
                </div>
                <div className="relative leading-[26px] inline-block min-w-[94px] z-[1]">
                  Testimonials
                </div>
                <div className="relative leading-[26px] inline-block min-w-[34px] z-[1]">
                  Blog
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26.4px]">
              <div className="w-[114px] relative leading-[140%] font-medium inline-block z-[1]">
                Usefull links
              </div>
              <div className="flex flex-col items-start justify-start gap-[8.1px] text-base-8 text-darkoverlayelement-do70 font-body-base-regular">
                <div className="relative leading-[26px] z-[1]">
                  Terms of Services
                </div>
                <div className="relative leading-[26px] inline-block min-w-[105px] z-[1]">
                  Privacy Policy
                </div>
                <div className="relative leading-[26px] inline-block min-w-[102px] z-[1]">
                  Cookie Policy
                </div>
                <div className="relative leading-[160%] inline-block min-w-[81px] z-[1]">{`Contact us `}</div>
              </div>
            </div>
          </div>
          <FooterSection />
        </div>
        <div className="w-[997.5px] flex flex-col items-start justify-start gap-[25.3px] max-w-full text-center text-base-8 text-darkoverlayelement-do70 font-body-base-regular">
          <div className="self-stretch h-[0.9px] relative bg-darkoverlayelement-do20 border-neutral-n0 border-t-[0.9px] border-solid box-border z-[1]" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative leading-[26px] font-medium whitespace-pre-wrap z-[1]">
              Copyright 2021 The Codext All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default V2;
