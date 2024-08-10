import { useMemo } from "react";
import PropTypes from "prop-types";

const TextLinkMenu = ({
  className = "",
  label = "Applications",
  rIcon = false,
  propPadding,
  propColor,
  propMinWidth,
  propWidth,
  icon,
}) => {
  const textLinkMenuStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propColor, propMinWidth, propWidth]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-inline-xs1 text-center text-[15.6px] text--[#4b5162] font-dm-sans ${className}`}
      style={textLinkMenuStyle}
    >
      <div className="overflow-hidden flex flex-row items-start justify-start">
        <div
          className="relative leading-[122%] font-medium inline-block min-w-[93px] whitespace-nowrap"
          style={labelStyle}
        >
          {label}
        </div>
      </div>
      {rIcon && (
        <img className="h-[17.5px] w-[17.5px] relative" alt="" src={icon} />
      )}
    </div>
  );
};

TextLinkMenu.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  rIcon: PropTypes.bool,
  icon: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TextLinkMenu;
