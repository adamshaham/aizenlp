import { useMemo } from "react";
import PropTypes from "prop-types";

const TrialBenefitItem = ({
  className = "",
  iconcreditCardCursorClick,
  courseName,
  propDisplay,
  propMinWidth,
  benefitDescriptions,
}) => {
  const courseNameStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch [backdrop-filter:blur(19.44px)] rounded-[15.56px] [background:linear-gradient(92.69deg,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0.17))] border-darkoverlayelement-do20 border-[1px] border-solid flex flex-row items-center justify-start py-1.5 pl-[7px] pr-4 gap-[11.7px] text-left text-base-6 text-neutral-n0 font-body-base-regular mq450:flex-wrap ${className}`}
    >
      <div className="w-[46.7px] [backdrop-filter:blur(11.67px)] rounded-[11.67px] bg-neutralalpha-na10 flex flex-row items-center justify-start pt-[23.8px] px-[11px] pb-[23.9px] box-border">
        <img
          className="h-[23.3px] w-[23.3px] relative"
          alt=""
          src={iconcreditCardCursorClick}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[187px]">
        <div
          className="relative leading-[24px] font-semibold inline-block min-w-[112px]"
          style={courseNameStyle}
        >
          {courseName}
        </div>
        <div className="self-stretch relative leading-[23.33px] text-darkoverlayelement-do70 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {benefitDescriptions}
        </div>
      </div>
    </div>
  );
};

TrialBenefitItem.propTypes = {
  className: PropTypes.string,
  iconcreditCardCursorClick: PropTypes.string,
  courseName: PropTypes.string,
  benefitDescriptions: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default TrialBenefitItem;
