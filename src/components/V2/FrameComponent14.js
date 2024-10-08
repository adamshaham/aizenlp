import PropTypes from "prop-types";

const contentData = {
  title: "Codext one of the best system in SAAS.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.",
  navItems: ["Home", "services", "Pricing", "Testimonials", "Blog"],
  buttonLabel: "FREE TRIAL",
  demoButtonLabel: "Try A Live Demo",
  companyName: "Codext",
};

const FrameComponent14 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[108.1px] box-border max-w-full shrink-0 text-left text-[54px] text-[#fff] font-body-base-regular mq450:pb-[45px] mq450:box-border mq1125:pb-[70px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[35px] pb-[159.9px] pl-[201px] pr-[72px] box-border relative gap-[68.6px] max-w-full shrink-0 gap-[17px] mq450:pl-5 mq450:pt-5 mq450:pb-[68px] mq450:box-border gap-[34px] mq800:pt-[23px] mq800:pb-[104px] mq800:pl-[100px] mq800:pr-9 mq800:box-border">
        <header className="w-[1440px] flex flex-row items-end justify-between gap-5 max-w-full text-left text-[26px] text-[#4452fe]1 font-body-base-regular">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px]">
            <div className="flex flex-row items-start justify-start">
              <img
                className="self-stretch w-[39.2px] relative max-h-full min-h-[45px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-367.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0 ml-[-1.6px]">
                <i className="relative tracking-[0.01em] leading-[150%] inline-block font-bold min-w-[95px] whitespace-nowrap z-[1]"></i>
              </div>
            </div>
          </div>
          <div className="w-[627px] flex flex-row items-end justify-start gap-[51.8px] max-w-full text-[16px] text-[#000] gap-[26px]">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.3px] box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[3.7px] max-w-full">
                <nav className="m-0 self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full mq800:hidden">
                  <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-5 text-left text-[16px] text-[#ffffffcc] font-body-base-regular">
                    {contentData.navItems.map((item, index) => (
                      <div
                        key={index}
                        className="relative leading-[160%] font-medium text-[#fff] inline-block min-w-[45px] z-[1]"
                      ></div>
                    ))}
                  </nav>
                </nav>
                <div className="w-[62.1px] h-[0.9px] relative border-[#fff] border-t-[0.9px] border-solid box-border z-[1]" />
              </div>
            </div>
            <div className="rounded-[4.38px] bg-[#fff] flex flex-row items-start justify-start pt-[13.1px] px-[26px] pb-[13.2px] whitespace-nowrap z-[1]">
              <div className="relative leading-[160%] font-medium inline-block min-w-[88px]"></div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-end justify-start gap-[32.3px] max-w-full gap-4 mq1350:flex-wrap">
          <div className="w-[435.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[55px] box-border min-w-[435.8px] min-h-[432px] max-w-full mq450:pb-9 mq450:box-border mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[31.8px] max-w-full gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21.8px] max-w-full">
                <div className="self-stretch relative leading-[120%] font-semibold z-[1] mq450:text-[33px] mq450:leading-[39px] mq800:text-[43px] mq800:leading-[52px]"></div>
                <div className="h-[75px] relative text-[16px] leading-[160%] text-[#ffffffcc] inline-block max-w-full z-[1]">
                  <p className="m-0"></p>
                  <p className="m-0"></p>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[13.1px] px-[25px] pb-[13.2px] bg-[#fff] rounded-[4.38px] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-[#e6e6e6]">
                <div className="relative text-[17.5px] leading-[160%] font-medium font-body-base-regular text-[#000] text-left"></div>
              </button>
            </div>
          </div>
          <img
            className="h-[491.5px] flex-1 relative max-w-full overflow-hidden min-w-[428px] z-[1] mq800:min-w-full"
            loading="lazy"
            alt=""
            src="/group-396.svg"
          />
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-399.svg"
          />
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
            alt=""
            src="/mask-group.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
