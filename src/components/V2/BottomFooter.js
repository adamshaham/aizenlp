import PropTypes from "prop-types";

const BottomFooter = ({ className = "" }) => {
  return (
    <div
      className={`w-[259.3px] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border gap-[27.4px] text-left text-7xl-3 text-[#4452fe]1 font-body-base-regular ${className}`}
    >
      <div className="flex flex-row items-start justify-start">
        <img
          className="self-stretch w-[39.2px] relative max-h-full min-h-[45px] z-[2]"
          alt=""
          src="/group-367.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0 ml-[-1.6px]">
          <i className="relative tracking-[0.01em] leading-[150%] inline-block font-bold min-w-[95px] z-[1] mq450:text-2xl mq450:leading-[32px]">
            Codext
          </i>
        </div>
      </div>
      <div className="h-[66px] relative text-sm leading-[160%] text-darkoverlayelement-do70 inline-block z-[1]">
        <p className="m-0">Lorem ipsum dolor sit amet, consect</p>
        <p className="m-0">
          etur adipiscing elit. Ullamcorper purus eleifend purus faucibus
          faucibus.
        </p>
      </div>
      <div className="flex flex-row items-start justify-start gap-[21.8px]">
        <img
          className="h-[35.9px] w-[35.9px] relative min-h-[36px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-351.svg"
        />
        <img
          className="h-[35.9px] w-[35.9px] relative min-h-[36px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-352.svg"
        />
        <img
          className="h-[35.9px] w-[35.9px] relative min-h-[36px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-353.svg"
        />
        <img
          className="h-[35.9px] w-[35.9px] relative min-h-[36px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-360.svg"
        />
      </div>
    </div>
  );
};

BottomFooter.propTypes = {
  className: PropTypes.string,
};

export default BottomFooter;
