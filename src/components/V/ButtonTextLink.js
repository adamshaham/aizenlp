import { useMemo } from "react";
import PropTypes from "prop-types";

const ButtonTextLink = ({
  className = "",
  rIcon = false,
  text = "Security",
  lIcon = false,
  lIcon1,
  propDisplay,
  propMinWidth,
  rIcon1,
}) => {
  const text1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start text-center text-sm-6 text--[#4b5162] font-dm-sans ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-inline-xs">
        {lIcon && (
          <img
            className="h-[17.5px] w-[17.5px] relative object-cover"
            alt=""
            src={lIcon1}
          />
        )}
        <div className="overflow-hidden flex flex-row items-start justify-start">
          <div
            className="relative leading-[126%] font-medium inline-block min-w-[54px]"
            style={text1Style}
          >
            {text}
          </div>
        </div>
        {rIcon && (
          <img
            className="h-[17.5px] w-[17.5px] relative object-cover"
            alt=""
            src={rIcon1}
          />
        )}
      </div>
    </div>
  );
};

ButtonTextLink.propTypes = {
  className: PropTypes.string,
  rIcon: PropTypes.bool,
  text: PropTypes.string,
  lIcon: PropTypes.bool,
  lIcon1: PropTypes.string,
  rIcon1: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ButtonTextLink;
