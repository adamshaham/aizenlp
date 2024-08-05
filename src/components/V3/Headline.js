import PropTypes from "prop-types";

const Headline = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-start justify-start pt-[8.8px] px-2 pb-[8.9px] box-border shrink-0 max-w-full text-center text-61xl text-[#fff] font-body-base-regular ${className}`}
    >
      <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[88px] font-medium font-[inherit] inline-block max-w-full mq450:text-5xl mq450:leading-[35px] mq1000:text-21xl mq1000:leading-[53px]">
        <p className="m-0">{`Work at the speed `}</p>
        <p className="m-0">of thought</p>
      </h1>
    </div>
  );
};

Headline.propTypes = {
  className: PropTypes.string,
};

export default Headline;
