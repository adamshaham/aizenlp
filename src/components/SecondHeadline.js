import PropTypes from "prop-types";

const SecondHeadline = ({ className = "" }) => {
  return (
    <div
      className={`w-[496.7px] overflow-hidden flex flex-row items-center justify-start py-0 px-2 box-border max-w-[125%] shrink-0 text-left text-33xl text-neutral-n0 font-body-base-regular ${className}`}
    >
      <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] inline-block max-w-full mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
        <p className="m-0">{`OpenType features `}</p>
        <p className="m-0">and Variable fonts</p>
      </h1>
    </div>
  );
};

SecondHeadline.propTypes = {
  className: PropTypes.string,
};

export default SecondHeadline;
