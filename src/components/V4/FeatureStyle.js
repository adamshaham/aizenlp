import PropTypes from "prop-types";

const FeatureStyle = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] text-left text-2xl-4 text-[#fff] font-button1 ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start">
        <div className="h-[42px] w-[41.8px] rounded-[29.15px] bg-primary2 overflow-hidden shrink-0 flex flex-col items-center justify-start py-[12.9px] px-3 box-border">
          <img
            className="w-[17.3px] h-4 relative"
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] z-[1]">
          <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
            At your fingertips
          </b>
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start pt-[9.8px] px-0 pb-[9.6px] text-mid-5">
        <div className="relative tracking-[0.19px] leading-[26.25px]">
          <p className="m-0">{`Slate helps you see how many `}</p>
          <p className="m-0">{`more days you need to work to `}</p>
          <p className="m-0">{`reach your financial goal. `}</p>
        </div>
      </div>
    </div>
  );
};

FeatureStyle.propTypes = {
  className: PropTypes.string,
};

export default FeatureStyle;
