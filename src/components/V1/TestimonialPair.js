import { useMemo } from "react";
import PropTypes from "prop-types";

const TestimonialPair = ({
  className = "",
  propBackgroundColor,
  propColor,
  propPadding,
  propPadding1,
  ekoSusiloanto,
  propColor1,
  regionalMobilityManager,
  propColor2,
  imagePlaceholder,
  propTransform,
}) => {
  const testimonialPairStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const loremIpsumDolor1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const testimonialDetailsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const testifierInfoStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const ekoSusiloantoStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const regionalMobilityManagerStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const imagePlaceholderIconStyle = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  return (
    <div
      className={`w-[542.5px] shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-[#2da884] flex flex-col items-start justify-start py-[31.1px] pl-[63px] pr-[39px] box-border relative gap-[38.9px] max-w-full shrink-0 text-left text-[15.6px] text-[#fff] font-plus-jakarta-sans gap-[19px] mq750:pl-[31px] mq750:box-border ${className}`}
      style={testimonialPairStyle}
    >
      <div
        className="self-stretch relative leading-[23.33px] font-medium"
        style={loremIpsumDolor1Style}
      >{`“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus. `}</div>
      <div
        className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full gap-0 text-[27.2px] font-montserrat mq750:flex-wrap"
        style={testimonialDetailsStyle}
      >
        <div
          className="w-[331.5px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border max-w-full"
          style={testifierInfoStyle}
        >
          <div
            className="self-stretch relative leading-[32px] font-semibold mq450:text-[22px] mq450:leading-[25px]"
            style={ekoSusiloantoStyle}
          >
            {ekoSusiloanto}
          </div>
          <div
            className="self-stretch relative text-[11.7px] leading-[16px] font-plus-jakarta-sans mt-[-1px]"
            style={regionalMobilityManagerStyle}
          >
            {regionalMobilityManager}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.8px]">
          <img
            className="h-[15.6px] w-[15.6px] relative min-h-[16px]"
            alt=""
            src="/first-rating.svg"
          />
          <img
            className="h-[15.6px] w-[15.6px] relative min-h-[16px]"
            alt=""
            src="/second-rating.svg"
          />
          <img
            className="h-[15.6px] w-[15.6px] relative min-h-[16px]"
            alt=""
            src="/third-rating.svg"
          />
          <img
            className="h-[15.6px] w-[15.6px] relative min-h-[16px]"
            alt=""
            src="/first-rating.svg"
          />
          <img
            className="h-[15.6px] w-[15.6px] relative min-h-[16px]"
            alt=""
            src="/second-rating.svg"
          />
        </div>
      </div>
      <img
        className="w-[77.8px] h-[77.8px] absolute !m-[0] bottom-[67.3px] left-[-42.8px] rounded-[97.22px] overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={imagePlaceholder}
        style={imagePlaceholderIconStyle}
      />
    </div>
  );
};

TestimonialPair.propTypes = {
  className: PropTypes.string,
  ekoSusiloanto: PropTypes.string,
  regionalMobilityManager: PropTypes.string,
  imagePlaceholder: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
  propTransform: PropTypes.any,
};

export default TestimonialPair;
