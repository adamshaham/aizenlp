import { useMemo } from "react";
import PropTypes from "prop-types";

const BasicPlan = ({ className = "", basicPlan, propMinWidth }) => {
  const basicPlanStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-t-[15.56px] rounded-b-none bg-[#2da884] overflow-hidden flex flex-row items-center justify-center py-[31.1px] px-[29px] gap-[31.1px] text-left text-xl-4 text-[#fff] font-montserrat mq450:flex-wrap gap-4 ${className}`}
    >
      <div
        className="flex-1 relative leading-[24px] font-semibold inline-block min-w-[84px] mq450:text-base mq450:leading-[19px]"
        style={basicPlanStyle}
      >
        {basicPlan}
      </div>
      <button className="cursor-pointer [border:none] pt-[15.6px] pb-[15.5px] pl-[18px] pr-[17px] bg-[#fff] w-[128.3px] rounded-[97.22px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-[#e6e6e6]">
        <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#2da884] text-center inline-block min-w-[92.4px] mq450:text-base mq450:leading-[19px]">
          Package
        </div>
      </button>
    </div>
  );
};

BasicPlan.propTypes = {
  className: PropTypes.string,
  basicPlan: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default BasicPlan;
