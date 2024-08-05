import { useMemo } from "react";
import PropTypes from "prop-types";

const Button1 = ({
  className = "",
  propBackgroundColor,
  propAlignSelf,
  propBorder,
  propFlexDirection,
  propPadding,
  subsribe,
  propColor,
  propTextDecoration,
  propMinWidth,
}) => {
  const button1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      border: propBorder,
      flexDirection: propFlexDirection,
    };
  }, [propBackgroundColor, propAlignSelf, propBorder, propFlexDirection]);

  const textButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const subsribeStyle = useMemo(() => {
    return {
      color: propColor,
      textDecoration: propTextDecoration,
      minWidth: propMinWidth,
    };
  }, [propColor, propTextDecoration, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] pt-[16.5px] px-5 pb-[16.6px] bg-primary2 self-stretch rounded-[34.03px] overflow-hidden flex flex-col items-center justify-start ${className}`}
      style={button1Style}
    >
      <div
        className="overflow-hidden flex flex-row items-center justify-start"
        style={textButtonStyle}
      >
        <div
          className="relative text-base tracking-[0.2px] leading-[16px] font-medium font-button1 text-neutral-n0 text-left inline-block min-w-[65px]"
          style={subsribeStyle}
        >
          {subsribe}
        </div>
      </div>
    </button>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  subsribe: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propBorder: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button1;
