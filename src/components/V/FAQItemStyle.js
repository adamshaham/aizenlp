import React from "react";
import PropTypes from "prop-types";

const FAQItemStyle = ({
  title,
  answer,
  propBorderBottom,
  propHeight,
  propMinWidth,
  iconchevronDownArrowDown,
  content,
  onClick,
  propColor,
}) => {
  return (
    <div
      className={`faq-item w-full`}
      style={{
        borderBottom: propBorderBottom,
        minHeight: propHeight,
        minWidth: propMinWidth,
        color: propColor,
      }}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-[18.6px] font-semibold">{title}</h3>
        <img
          src={iconchevronDownArrowDown}
          alt="Chevron Icon"
          className={`transform transition-transform ${
            content ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {content && (
        <div className="mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

FAQItemStyle.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  propBorderBottom: PropTypes.string,
  propHeight: PropTypes.string,
  propMinWidth: PropTypes.string,
  iconchevronDownArrowDown: PropTypes.string,
  content: PropTypes.bool,
  onClick: PropTypes.func,
  propColor: PropTypes.string,
};

export default FAQItemStyle;
