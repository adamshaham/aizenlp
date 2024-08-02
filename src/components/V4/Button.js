import { useMemo } from "react";
import Text1 from "./Text1";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  propBorder,
  propBackgroundColor,
  propAlignSelf,
  propPadding,
  propWidth,
  tryForFree,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propBorder, propBackgroundColor, propAlignSelf, propPadding, propWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[1.7px] pl-8 pr-[31px] bg-primary shadow-[0px_4px_31px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start ${className}`}
      style={buttonStyle}
    >
      <Text1 tryForFree={tryForFree} />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  tryForFree: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Button;
