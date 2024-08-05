import { useMemo } from "react";
import PropTypes from "prop-types";

const FAQItemStyle = ({
  className = "",
  answer = "Absolutely! We understand that analytics can be overwhelming, especially if you're new to it. Neuros offers a range of tutorials, user guides, and dedicated customer support to assist you at every step. Our aim is to make your Neuros experience as smooth and beneficial as possible.",
  title = "I'm new to business analytics. Does Neuros offer any support or tutorials?",
  propBorderBottom,
  propHeight,
  propMinWidth,
  iconchevronDownArrowDown,
  content,
  propHeight1,
  propMinHeight,
  propHeight2,
  propColor,
}) => {
  const fAQItemStyle2Style = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const lineStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const fAQTitleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const content1Style = useMemo(() => {
    return {
      height: propHeight1,
      minHeight: propMinHeight,
    };
  }, [propHeight1, propMinHeight]);

  const fAQContentStyle = useMemo(() => {
    return {
      height: propHeight2,
      color: propColor,
    };
  }, [propHeight2, propColor]);

  return (
    <div
      className={`self-stretch border-[#eceef4] border-b-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-lgi-4 text-[#1c1f25] font-dm-sans ${className}`}
      style={fAQItemStyle2Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[23.3px] pl-0 pr-[19px] box-border gap-[15.6px] max-w-full mq750:flex-wrap">
        <div className="flex flex-row items-start justify-start pt-[5.9px] px-0 pb-[5.8px]">
          <div
            className="h-[44.3px] w-[3.9px] relative rounded-[1.94px] bg-[#387ff5]"
            style={lineStyle}
          />
        </div>
        <b
          className="flex-1 relative leading-[142%] inline-block min-w-[379px] max-w-full mq750:min-w-full"
          style={fAQTitleStyle}
        >
          {title}
        </b>
        <div className="flex flex-row items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="h-[23.3px] w-[23.3px] relative"
            alt=""
            src={iconchevronDownArrowDown}
          />
        </div>
      </div>
      {!content && (
        <div
          className="self-stretch h-[89px] flex-row items-start justify-start pt-0 pb-[19.4px] pl-0 pr-[19px] box-border max-w-full text-base-6 text-[#b9b9b9] font-body-base-regular"
          style={content1Style}
        >
          <div
            className="h-[72px] flex-1 relative leading-[23.33px] inline-block max-w-[143%] shrink-0"
            style={fAQContentStyle}
          >
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

FAQItemStyle.propTypes = {
  className: PropTypes.string,
  answer: PropTypes.string,
  title: PropTypes.string,
  iconchevronDownArrowDown: PropTypes.string,
  content: PropTypes.bool,

  /** Style props */
  propBorderBottom: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight2: PropTypes.any,
  propColor: PropTypes.any,
};

export default FAQItemStyle;
