import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[98.8px] box-border max-w-full shrink-0 text-center text-19xl-5 text-[#060e1a] font-body-base-regular mq800:pb-16 mq800:box-border ${className}`}
    >
      <div className="w-[997.5px] flex flex-col items-end justify-start gap-[53.2px] max-w-full gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
          <div className="w-[586.3px] flex flex-col items-end justify-start gap-[25.2px] max-w-full">
            <div className="flex flex-row items-start justify-end py-0 pl-[42px] pr-9 shrink-0 mq800:pl-[21px] mq800:box-border">
              <div className="relative leading-[51px] font-semibold mq450:text-4xl mq450:leading-[30px] mq800:text-12xl mq800:leading-[40px]">
                Let’s see our User’s Review
              </div>
            </div>
            <div className="self-stretch relative text-base-8 leading-[160%] text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a,
              sed lobortis nisi.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[43.8px] text-left text-2xs-5 text-[#051114] gap-[22px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[26.3px]">
            <TestimonialCard
              group425="/group-425.svg"
              authorImage="/ellipse-20@2x.png"
              wilsonBergson="Wilson Bergson"
            />
            <TestimonialCard
              propBoxShadow="0px 3.5px 43.75px 4.38px rgba(5, 17, 20, 0.05)"
              propBoxShadow1="0px 3.5px 43.75px 4.38px rgba(5, 17, 20, 0.05)"
              group425="/group-425-1.svg"
              propColor="rgba(5, 17, 20, 0.7)"
              propAlignSelf="unset"
              authorImage="/ellipse-20-1@2x.png"
              propFlex="unset"
              wilsonBergson="Zaire Aminoff"
              propDisplay="inline-block"
              propMinWidth="112px"
              propColor1="rgba(5, 17, 20, 0.7)"
            />
            <TestimonialCard
              propBoxShadow="0px 3.5px 43.75px 4.38px rgba(5, 17, 20, 0.05)"
              propBoxShadow1="0px 3.5px 43.75px 4.38px rgba(5, 17, 20, 0.05)"
              group425="/group-425-1.svg"
              propColor="rgba(5, 17, 20, 0.7)"
              propAlignSelf="unset"
              authorImage="/ellipse-20-2@2x.png"
              propFlex="unset"
              wilsonBergson="Ryan Press"
              propDisplay="inline-block"
              propMinWidth="93px"
              propColor1="rgba(5, 17, 20, 0.7)"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
            <div className="w-[70px] flex flex-row items-start justify-start gap-[8.8px]">
              <div className="h-[8.8px] w-[35px] relative border-blueviolet-200 border-t-[8.8px] border-solid box-border shrink-0" />
              <div className="h-[8.8px] w-[21.9px] relative border-blueviolet-200 border-t-[8.8px] border-solid box-border opacity-[0.4] shrink-0" />
              <div className="h-[8.8px] w-[21.9px] relative border-blueviolet-200 border-t-[8.8px] border-solid box-border opacity-[0.4] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
