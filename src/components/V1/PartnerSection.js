import PropTypes from "prop-types";

const PartnerSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-neutral-n0 flex flex-col items-center justify-start pt-[38.9px] px-5 pb-[58px] box-border min-h-[314px] shrink-0 max-w-full text-center text-base text-dimgray-200 font-body-base-regular ${className}`}
    >
      <div className="w-[1170.6px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border gap-[19.4px] max-w-[1170.56px] lg:max-w-full">
        <div className="self-stretch relative leading-[160%]">
          160,000+ customers in over 120 countries grow their businesses with
          Neuros
        </div>
        <div className="w-full h-[172.2px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-center pt-[19.5px] pb-[19.4px] pl-[53px] pr-[52px] box-border gap-x-stack-4xl gap-y-stack-4xl min-w-[972.22px] max-w-[1170.56px] lg:pl-[26px] lg:pr-[26px] lg:box-border lg:max-w-full gap-stack-4xl">
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[6.2px] px-[18px] pb-[6.4px] box-border min-w-[181px]">
            <img
              className="h-[34.1px] w-[144.4px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[6.2px] pb-[6.4px] pl-[11px] pr-3 box-border min-w-[181px]">
            <img
              className="h-[34.1px] w-[157.9px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[6.2px] px-[18px] pb-[6.4px] box-border min-w-[181px]">
            <img
              className="h-[34.1px] w-[144.4px] relative"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[3.8px] px-10 pb-1 box-border min-w-[181px]">
            <img
              className="h-[38.9px] w-[100.8px] relative"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[9.8px] px-[18px] pb-2.5 box-border min-w-[181px]">
            <img
              className="h-[26.9px] w-[145.2px] relative"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-[8.5px] pl-[26px] pr-[25px] box-border min-w-[181px]">
            <img
              className="h-[29.7px] w-[129.9px] relative"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-[3.9px] px-[30px] box-border min-w-[181px]">
            <img
              className="h-[38.9px] w-[120.7px] relative"
              alt=""
              src="/vector-6.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[9.3px] px-3 pb-[9.2px] box-border min-w-[181px]">
            <img
              className="h-[28.2px] w-[157.5px] relative"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-[7.8px] px-[15px] box-border min-w-[181px]">
            <img
              className="h-[31.1px] w-[150.1px] relative"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[53px] box-border min-w-[181px]">
            <img
              className="h-[46.7px] w-[74.2px] relative"
              alt=""
              src="/vector-9.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PartnerSection.propTypes = {
  className: PropTypes.string,
};

export default PartnerSection;
