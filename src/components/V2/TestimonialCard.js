import { useMemo } from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({
  className = "",
  propBoxShadow,
  propBoxShadow1,
  group425,
  propColor,
  propAlignSelf,
  authorImage,
  propFlex,
  wilsonBergson,
  propDisplay,
  propMinWidth,
  propColor1,
}) => {
  const testimonialCardStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const rectangleDivStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow1,
    };
  }, [propBoxShadow1]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const testimonialAuthorStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const authorInfoStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const wilsonBergsonStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const marketingManagerStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`flex-1 shadow-[0px_1.8px_3.5px_#5b1fb0] rounded-[8.75px] bg-[#fff] flex flex-col items-start justify-start pt-[43.8px] pb-[43.7px] pl-[49px] pr-[47px] box-border gap-[20.4px] min-w-[236px] text-left text-[10px] text-[#051114] font-body-base-regular mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={testimonialCardStyle}
    >
      <div
        className="w-[315px] h-[254.6px] relative shadow-[0px_1.8px_3.5px_#5b1fb0] rounded-[8.75px] bg-[#fff] hidden"
        style={rectangleDivStyle}
      />
      <div className="w-[203.9px] flex flex-row items-start justify-start gap-[8.9px]">
        <img
          className="h-[16.7px] w-5 relative z-[1]"
          loading="lazy"
          alt=""
          src={group425}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0">
          <i
            className="self-stretch relative leading-[160%] font-medium z-[1]"
            style={loremIpsumDolorStyle}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            elit nunc donec elit iaculis arcu. Quis fe........
          </i>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-end justify-start gap-[17.5px] text-[17.5px]"
        style={testimonialAuthorStyle}
      >
        <img
          className="h-[70px] w-[70px] relative rounded-[50%] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={authorImage}
        />
        <div
          className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.4px]"
          style={authorInfoStyle}
        >
          <div className="flex flex-col items-start justify-start gap-[4.4px]">
            <div
              className="relative leading-[160%] z-[1]"
              style={wilsonBergsonStyle}
            >
              {wilsonBergson}
            </div>
            <div
              className="relative text-[8.8px] leading-[160%] inline-block min-w-[81px] z-[1]"
              style={marketingManagerStyle}
            >
              Marketing manager
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  className: PropTypes.string,
  group425: PropTypes.string,
  authorImage: PropTypes.string,
  wilsonBergson: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBoxShadow1: PropTypes.any,
  propColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor1: PropTypes.any,
};

export default TestimonialCard;
