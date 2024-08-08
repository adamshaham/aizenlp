import { useMemo } from "react";
import Text1 from "./Text1";
import PropTypes from "prop-types";

const contentData = {
  button: {
    defaultText: "Try For Free",
    style: {
      border: "none",
      backgroundColor: "#4452fe",
      alignSelf: "stretch",
      padding: "1.7px 8px 1.7px 31px",
      width: "auto"
    }
  }
};

const Button = ({
  className = "",
  propBorder = contentData.button.style.border,
  propBackgroundColor = contentData.button.style.backgroundColor,
  propAlignSelf = contentData.button.style.alignSelf,
  propPadding = contentData.button.style.padding,
  propWidth = contentData.button.style.width,
  tryForFree = contentData.button.defaultText,
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
      className={`cursor-pointer py-[1.7px] pl-8 pr-[31px] bg-[#4452fe] shadow-[0px_4px_31px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start ${className}`}
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
