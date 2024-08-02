import PropTypes from "prop-types";

const DesktopHeroLight1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start pt-[77.8px] px-5 pb-[77.7px] box-border gap-[38.9px] max-w-full text-center text-2xl-4 text-neutral-n0 font-button1 lg:pt-[51px] lg:pb-[51px] lg:box-border gap-[19px] mq750:pt-[33px] mq750:pb-[33px] mq750:box-border ${className}`}
    >
      <div className="overflow-hidden flex flex-col items-center justify-start pt-[19.5px] px-[19px] pb-[19.4px] box-border max-w-full">
        <div className="overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border gap-[6.8px] max-w-full shrink-0">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <b className="relative tracking-[0.1px] leading-[33px] mq450:text-mid mq450:leading-[26px]">
              At your fingertips
            </b>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] shrink-0 text-34xl-5">
            <div className="w-[634px] relative tracking-[0.19px] leading-[64px] font-black inline-block mq1050:text-24xl mq1050:leading-[51px] mq450:text-13xl mq450:leading-[38px]">{`Lightning fast prototyping `}</div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-[9.7px] px-[9px] box-border max-w-full shrink-0 text-base-6">
            <b className="w-[417px] relative tracking-[0.19px] leading-[19.44px] inline-block">
              <p className="m-0">{`Most calendars are designed for teams. Slate is designed `}</p>
              <p className="m-0">for freelancers</p>
            </b>
          </div>
        </div>
      </div>
      <div className="w-[268.3px] overflow-hidden flex flex-col items-center justify-start pt-[19.4px] px-[19px] pb-[19.5px] box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch rounded-[34.03px] bg-neutral-n0 overflow-hidden flex flex-col items-center justify-start pt-[15.6px] px-[54px] pb-[15.5px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <b className="relative text-3xl tracking-[0.1px] leading-[33px] inline-block font-button1 text-primary2 text-center min-w-[120px] mq450:text-lg mq450:leading-[26px]">
                  Try For Free
                </b>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="w-[1131.5px] h-[679.6px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[35.5px] px-[35px] box-border max-w-full mq750:pt-[23px] mq750:pb-[23px] mq750:box-border">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[17.7px] px-[17px] gap-[26px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/-macbook-pro.svg"
          />
        </div>
      </div>
    </section>
  );
};

DesktopHeroLight1.propTypes = {
  className: PropTypes.string,
};

export default DesktopHeroLight1;
