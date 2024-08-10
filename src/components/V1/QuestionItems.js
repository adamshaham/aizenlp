import React from "react";
import PropTypes from "prop-types";

const QuestionItems = ({ question, answer, isOpen, onClick, propHeight }) => {
  return (
    <div
      className="w-[1200px] shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-[#2da884] overflow-hidden flex flex-row items-start justify-start p-[23.3px] box-border max-w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-start justify-start gap-[15.6px] w-full">
        <div className="relative leading-[31.11px] font-semibold text-[#fff]">
          {question}
        </div>
        {isOpen && (
          <div className="relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#fff]">
            {answer}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15.7px]">
        <div className="flex flex-row items-start justify-start pt-[19.4px] pb-[19.5px] pl-0 pr-[17px]">
          <div className="h-[23.3px] w-[45.6px] relative">
            <img
              className={`absolute top-[0px] left-[0px] w-[23.3px] h-[23.3px] transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              alt="Chevron Icon"
              src="/vector-14.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionItems.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  propHeight: PropTypes.string,
};

export default QuestionItems;
