import PropTypes from "prop-types";

const DesktopPARTNERLight = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-dark-background1 overflow-hidden flex flex-col items-start justify-start max-w-full z-[2] text-center text-25xl-7 text-neutral-n0 font-button1 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[77.8px] px-5 box-border gap-[77.8px] max-w-full gap-[39px] gap-[19px] mq750:pt-5 mq750:pb-[51px] mq750:box-border">
        <div className="overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] gap-[6.8px] shrink-0">
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px]">
            <div className="relative tracking-[0.19px] leading-[56px] mq1050:text-17xl mq1050:leading-[44px] mq450:text-8xl mq450:leading-[33px]">
              Partners
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start pt-[9.8px] px-[9px] pb-[9.6px] text-base-6">
            <b className="w-[290px] relative tracking-[0.19px] leading-[19.44px] inline-block">
              <p className="m-0">{`Most calendars are designed for teams. `}</p>
              <p className="m-0">Slate is designed for freelancers</p>
            </b>
          </div>
        </div>
        <div className="w-[927.5px] flex flex-col items-center justify-start max-w-full shrink-0">
          <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-between gap-5 mq1050:justify-center">
            <div className="overflow-hidden flex flex-col items-start justify-start py-[14.6px] px-3.5">
              <img
                className="w-[58.3px] h-[58.3px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start py-[14.6px] px-3.5">
              <img
                className="w-[58.3px] h-[59px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logosapiary.svg"
              />
            </div>
            <div className="h-[97.8px] overflow-hidden flex flex-col items-center justify-start pt-[14.5px] px-3.5 pb-[14.7px] box-border">
              <img
                className="w-[58.3px] flex-1 relative max-h-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/logosandroidicon1.svg"
              />
            </div>
            <div className="h-[87.5px] w-[99.3px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[14.6px] px-3.5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/logosbasecamp1.svg"
              />
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start py-[14.6px] px-3.5">
              <img
                className="w-[58.3px] h-[62.9px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logosairbnb.svg"
              />
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[14.6px] px-3.5">
              <img
                className="w-[58.3px] h-[58.3px] relative overflow-hidden shrink-0"
                alt=""
                src="/frame-1.svg"
              />
            </div>
            <div className="h-[87.5px] w-[174.9px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[14.6px] px-3.5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/logosibm1.svg"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start shrink-0">
          <div className="flex flex-col items-center justify-start">
            <div className="rounded-[34.03px] bg-primary2 overflow-hidden flex flex-col items-center justify-start pt-[15.5px] px-[54px] pb-[15.6px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <b className="relative text-3xl tracking-[0.1px] leading-[33px] inline-block font-button1 text-neutral-n0 text-left min-w-[120px] mq450:text-lg mq450:leading-[26px]">
                  Try For Free
                </b>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

DesktopPARTNERLight.propTypes = {
  className: PropTypes.string,
};

export default DesktopPARTNERLight;
