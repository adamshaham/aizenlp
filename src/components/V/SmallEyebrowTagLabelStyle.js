import { useMemo } from "react";
import PropTypes from "prop-types";

const SmallEyebrowTagLabelStyle = ({
  className = "",
  content = "FAQ",
  icon = true,
  propWidth,
  iconAI,
  propDisplay,
  propMinWidth,
}) => {
  const smallEyebrowTagLabelStyleStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contentStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`w-[81.6px] shadow-[0px_0px_0.97px_rgba(44,_58,_114,_0.05),_0px_1.9px_5.83px_rgba(44,_58,_114,_0.05),_0px_9.7px_17.5px_rgba(58,_76,_146,_0.1)] rounded-[20px] bg-[#fff] border-[#b6bcce] border-[1px] border-solid box-border flex flex-row items-center justify-start py-1.5 pl-[11px] pr-2.5 gap-[7.8px] text-center text-[15.6px] text--[#4b5162] font-body-base-regular ${className}`}
      style={smallEyebrowTagLabelStyleStyle}
    >
      {icon && (
        <img
          className="h-[19.4px] w-[19.4px] relative object-cover"
          alt=""
          src={iconAI}
        />
      )}
      <div
        className="relative leading-[25px] font-medium inline-block min-w-[31px]"
        style={contentStyle}
      >
        {content}
      </div>
    </div>
  );
};

SmallEyebrowTagLabelStyle.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.bool,
  iconAI: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default SmallEyebrowTagLabelStyle;
