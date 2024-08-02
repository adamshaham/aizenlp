import { useMemo } from "react";
import PropTypes from "prop-types";

const QuestionItems = ({
  className = "",
  propHeight,
  doYouProvideSustainableAn,
}) => {
  const questionPairStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`self-stretch shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-neutral-n0 overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[23.4px] px-[54px] pb-[23.3px] box-border gap-[0.1px] max-w-full text-left text-8xl-2 text-heading font-montserrat lg:pl-[27px] lg:pr-[27px] lg:box-border ${className}`}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start pt-[15.1px] px-0 pb-0 box-border min-w-[675px] max-w-full shrink-0 mq1050:min-w-full"
        style={questionPairStyle}
      >
        <div className="self-stretch relative leading-[32px] font-semibold mq450:text-3xl mq450:leading-[25px]">
          {doYouProvideSustainableAn}
        </div>
      </div>
      <img
        className="h-[62.2px] w-[62.2px] relative"
        alt=""
        src="/group-1-1.svg"
      />
    </div>
  );
};

QuestionItems.propTypes = {
  className: PropTypes.string,
  doYouProvideSustainableAn: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default QuestionItems;
