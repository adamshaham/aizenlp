import PropTypes from "prop-types";

const TestimonialStyle = ({ className = "", avatar }) => {
  return (
    <div
      className={`shadow-[0px_12.6px_18.47px_rgba(0,_0,_0,_0.07)] rounded-[9.72px] bg-[#fff] border-gainsboro-300 border-[1px] border-solid box-border flex flex-col items-center justify-start py-[37px] pl-[31px] pr-[29px] gap-[29.2px] max-w-full text-center text-mid-5 text-second-text1 font-button1 mq750:pt-px mq750:pb-6 mq750:box-border ${className}`}
    >
      <img
        className="w-[144.9px] h-[144.9px] relative object-cover"
        loading="lazy"
        alt=""
        src={avatar}
      />
      <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px]">
        <div className="w-[244px] relative tracking-[0.19px] leading-[26.25px] inline-block">
          <p className="m-0">{`Slate helps you see how many `}</p>
          <p className="m-0">{`more days you need to work `}</p>
          <p className="m-0">to reach your financial goal for</p>
          <p className="m-0"> the month and year.</p>
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start">
        <img
          className="h-[28.4px] w-[28.4px] relative overflow-hidden shrink-0 min-h-[28px]"
          loading="lazy"
          alt=""
          src="/bxbxsstar.svg"
        />
        <img
          className="h-[28.4px] w-[28.4px] relative overflow-hidden shrink-0 min-h-[28px]"
          alt=""
          src="/bxbxsstar-1.svg"
        />
        <img
          className="h-[28.4px] w-[28.4px] relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
          alt=""
          src="/bxbxsstar-2.svg"
        />
        <img
          className="h-[28.4px] w-[28.4px] relative overflow-hidden shrink-0 min-h-[28px]"
          alt=""
          src="/bxbxsstar-3.svg"
        />
        <img
          className="h-[28.4px] w-[28.4px] relative overflow-hidden shrink-0 min-h-[28px]"
          alt=""
          src="/bxbxstar.svg"
        />
      </div>
      <div className="w-[86px] overflow-hidden flex flex-row items-center justify-start text-left text-mini-6 text-dark-background1">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="relative tracking-[0.19px] leading-[27px] inline-block min-w-[86px]">
              Regina Miles
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[18px] text-xs-7 text-second-text1">
            <b className="relative tracking-[0.1px] leading-[18px] inline-block min-w-[48px]">
              Designer
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialStyle.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
};

export default TestimonialStyle;
