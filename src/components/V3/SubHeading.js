import { useMemo } from "react";
import PropTypes from "prop-types";

const contentData = {
  subHeading: {
    textLines: [
      "Slate is designed for freelancers who want a simple way to plan their schedule.",
    ],
    padding: "8.8px 8px 8.9px",
    width: "516px",
    height: "53.2px",
  },
};

const SubHeading = ({
  className = "",
  propPadding = contentData.subHeading.padding,
  propWidth = contentData.subHeading.width,
  propHeight = contentData.subHeading.height,
}) => {
  const subHeadingStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const weFocusOnContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start pt-[8.8px] px-2 pb-[8.9px] text-center text-[20px] text-[#fff] font-body-base-regular ${className}`}
      style={subHeadingStyle}
    >
      <div
        className="w-[571px] relative tracking-[0.2px] leading-[30px] inline-block mq450:text-[16px] mq450:leading-[24px]"
        style={weFocusOnContainerStyle}
      >
        {contentData.subHeading.textLines.map((line, index) => (
          <p key={index} className="m-0">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

SubHeading.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default SubHeading;
