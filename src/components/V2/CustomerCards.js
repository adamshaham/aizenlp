import { useMemo } from "react";
import PropTypes from "prop-types";

const CustomerCards = ({
  className = "",
  group412,
  dataAnalytic,
  propWidth,
  propDisplay,
  group10,
}) => {
  const dataAnalyticStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`shadow-[0px_5.3px_43.75px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] bg-[#fff] flex flex-col items-end justify-start pt-[35px] px-[21px] pb-[30.6px] gap-[43.7px] text-center text-2xl-9 text-[#051114] font-body-base-regular mq450:pt-[23px] mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[229.3px] h-[364.9px] relative shadow-[0px_5.3px_43.75px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] bg-[#fff] hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[29px] pr-[27px]">
        <img
          className="h-[131.3px] w-[131.3px] relative z-[1]"
          loading="lazy"
          alt=""
          src={group412}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] shrink-0">
          <div className="flex flex-row items-start justify-start py-0 pl-[22px] pr-6">
            <div
              className="relative leading-[33px] font-medium z-[1] mq450:text-lg mq450:leading-[26px]"
              style={dataAnalyticStyle}
            >
              {dataAnalytic}
            </div>
          </div>
          <div className="self-stretch relative text-smi-3 leading-[160%] text-dimgray-100 z-[1]">
            Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-[79px] pr-20">
          <img
            className="h-[26.3px] w-[26.2px] relative object-contain shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={group10}
          />
        </div>
      </div>
    </div>
  );
};

CustomerCards.propTypes = {
  className: PropTypes.string,
  group412: PropTypes.string,
  dataAnalytic: PropTypes.string,
  group10: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default CustomerCards;
