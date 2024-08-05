import TestimonialStyle from "./TestimonialStyle";
import TextButton from "./TextButton";
import PropTypes from "prop-types";

const DesktopTestimonialsLight = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-row items-start justify-start pt-px px-0 pb-0 box-border max-w-full z-[3] text-center text-25xl-7 text-[#fff] font-button1 ${className}`}
    >
      <div className="h-px w-[1399px] relative hidden max-w-full" />
      <div className="flex-1 flex flex-col items-center justify-start pt-[97.2px] px-5 pb-[97.3px] box-border gap-[77.8px] max-w-full gap-[39px] lg:pt-px lg:pb-[63px] lg:box-border mq1050:pb-[41px] mq1050:box-border mq450:pb-[27px] mq450:box-border gap-[19px]">
        <div className="overflow-hidden flex flex-col items-center justify-start">
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px]">
            <div className="relative tracking-[0.19px] leading-[56px] mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">
              Testimonials
            </div>
          </div>
        </div>
        <div className="w-[1093.8px] flex flex-row flex-wrap items-start justify-start gap-x-[101.1px] gap-y-[56.4px] min-h-[1156px] max-w-full text-mid-5 text-second-text1 gap-7">
          <TestimonialStyle avatar="/avatar1@2x.png" />
          <TestimonialStyle avatar="/avatar-11@2x.png" />
          <TestimonialStyle avatar="/avatar-21@2x.png" />
          <TestimonialStyle avatar="/avatar-31@2x.png" />
          <TestimonialStyle avatar="/avatar-4@2x.png" />
          <TestimonialStyle avatar="/avatar-5@2x.png" />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
          <div className="flex flex-col items-center justify-start">
            <div className="rounded-[34.03px] bg-primary2 overflow-hidden flex flex-col items-center justify-start pt-[15.6px] px-[45px] pb-[15.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <TextButton />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

DesktopTestimonialsLight.propTypes = {
  className: PropTypes.string,
};

export default DesktopTestimonialsLight;
