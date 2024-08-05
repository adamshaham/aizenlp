import PlanItems from "./PlanItems";
import PropTypes from "prop-types";

const Pricing1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[107.5px] box-border max-w-full shrink-0 text-center text-19xl-5 text-[#051114] font-body-base-regular mq800:pb-[70px] mq800:box-border ${className}`}
    >
      <div className="w-[997.5px] flex flex-col items-end justify-start gap-[25.1px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="relative leading-[51px] font-semibold mq450:text-4xl mq450:leading-[30px] mq800:text-12xl mq800:leading-[40px]">
            Choose your best pricing plan
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[52.4px] max-w-full text-lgi-3 gap-[26px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[12.5px] max-w-full mq450:flex-wrap">
              <div className="relative leading-[29px] font-medium">
                Added for Monthly
              </div>
              <div className="h-[28.9px] w-[72.6px] relative rounded-mid-5 bg-[#fff] border-blueviolet-200 border-[0.9px] border-solid box-border">
                <div className="absolute top-[0px] left-[0px] rounded-mid-5 bg-[#fff] border-blueviolet-200 border-[0.9px] border-solid box-border w-full h-full hidden" />
                <div className="absolute top-[4.4px] left-[4.3px] rounded-mid-5 bg-blueviolet-200 border-blueviolet-200 border-[0.9px] border-solid box-border w-[31.5px] h-[20.1px] z-[1]" />
              </div>
              <div className="relative leading-[29px] font-medium text-gray-200 inline-block min-w-[59px]">
                Yearly
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[25.4px] grid-cols-[repeat(3,_minmax(238px,_1fr))] text-gray-200 mq800:justify-center mq800:grid-cols-[minmax(238px,_1fr)]">
            <PlanItems
              startUp="Start-up"
              prop="$10"
              singalUserLicense="Singal user license"
            />
            <div className="rounded-[8.75px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#591eae),_#fff] flex flex-col items-start justify-start pt-0 px-0 pb-[46.3px] relative gap-[8.8px] text-[#fff] mq450:pb-[30px] mq450:box-border">
              <div className="self-stretch h-[421.8px] relative rounded-[8.75px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#591eae),_#fff] hidden z-[0]" />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0.9px] rounded-[8.75px] bg-[#fff] z-[1]" />
              <div className="self-stretch flex flex-col items-end justify-start pt-[43.7px] pb-[26.2px] pl-[78px] pr-20 relative gap-[11.3px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-51.svg"
                />
                <div className="flex flex-row items-start justify-end py-0 pl-[46px] pr-11">
                  <div className="relative leading-[29px] font-medium inline-block min-w-[67px] z-[3]">
                    Classic
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5.2px] text-19xl-5">
                  <div className="self-stretch h-[0.9px] relative bg-[#fff] border-[#fff] border-t-[0.9px] border-solid box-border z-[3]" />
                  <div className="flex flex-row items-start justify-start py-0 px-3.5">
                    <div className="relative leading-[49.9px] inline-block min-w-[127.8px] whitespace-nowrap z-[3] mq450:text-3xl">
                      <span className="font-semibold">$30</span>
                      <span className="text-9xl font-medium">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[59px] pr-[62px] text-left text-sm text-[#051114] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[35.7px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-7 pr-[30px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8.8px] opacity-[0.7] shrink-0 z-[2]">
                      <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
                        <div className="relative leading-[160%] inline-block min-w-[126px]">
                          Easy Customizable
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                        <div className="relative leading-[23px] inline-block min-w-[127px]">
                          Commercia license
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[22px] pr-[21px] text-center">
                        <div className="relative leading-[23px] inline-block min-w-[93px]">
                          5 user license
                        </div>
                      </div>
                      <div className="relative leading-[160%]">
                        Hotline support 24/7
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[13.2px] px-[25px] pb-[13.1px] bg-[#5319a6] rounded-[4.38px] flex flex-row items-start justify-start shrink-0 whitespace-nowrap z-[2] hover:bg-[#7a40cc]">
                    <div className="relative text-sm tracking-[0.05em] leading-[160%] font-medium font-body-base-regular text-[#fff] text-center">
                      TRY THIS PACKAGE
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <PlanItems
              startUp="Premium"
              propWidth="unset"
              propMinWidth="82px"
              propAlignSelf="unset"
              propDisplay="inline-block"
              propMinWidth1="127.8px"
              prop="$49"
              propTextAlign="left"
              propTextAlign1="left"
              singalUserLicense="10 user license"
              propMinWidth2="99px"
              propTextAlign2="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing1.propTypes = {
  className: PropTypes.string,
};

export default Pricing1;
