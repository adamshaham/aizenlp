import BasicPlan from "./BasicPlan";
import PropTypes from "prop-types";

const Pricing = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[76.5px] box-border max-w-full text-center text-46xl-1 text-heading font-montserrat lg:pb-[50px] lg:box-border mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-start justify-start gap-[77.4px] max-w-full shrink-0 gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full">
          <div className="w-[708.8px] flex flex-col items-start justify-start gap-[23.4px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{`Pricing `}</span>
              <span className="text-accent-1">Table</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38.9px] max-w-full text-left text-xl-4 text-accent-1 gap-[19px]">
          <div className="flex-1 shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] flex flex-col items-center justify-center min-w-[283px] max-w-full">
            <BasicPlan basicPlan="Basic Plan" />
            <div className="self-stretch bg-[#fff] border-accent-1 border-b-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[37px] text-center text-46xl-1">
              <div className="self-stretch flex flex-col items-center justify-center gap-[15.6px]">
                <div className="self-stretch relative leading-[70px] font-semibold whitespace-nowrap mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
                  $40.00
                </div>
                <div className="self-stretch relative text-base-6 leading-[24px] font-medium font-plus-jakarta-sans">
                  /Per month
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-[15.56px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start py-[38.9px] px-[38px] text-base-6 font-plus-jakarta-sans mq450:pt-[25px] mq450:pb-[25px] mq450:box-border">
              <div className="self-stretch flex flex-col items-center justify-center gap-[38.9px] gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[15.6px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Initial Consultation
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Labor Costs
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons1.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Materials and Plants
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Equipment and Machinery
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons3.svg"
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-[23.4px] px-[38px] pb-[23.3px] bg-accent-1 self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-mediumaquamarine">
                  <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center mq450:text-base mq450:leading-[19px]">
                    Purchase
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] flex flex-col items-center justify-center min-w-[283px] max-w-full text-center text-46xl-1">
            <BasicPlan basicPlan="Standard Plan" propMinWidth="103px" />
            <div className="self-stretch bg-[#fff] border-accent-1 border-b-[2.9px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[35px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[15.6px]">
                <div className="self-stretch relative leading-[70px] font-semibold whitespace-nowrap mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
                  $80.00
                </div>
                <div className="self-stretch relative text-base-6 leading-[24px] font-medium font-plus-jakarta-sans">
                  /Per month
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-[15.56px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[38.8px] text-left text-base-6 font-plus-jakarta-sans mq450:pt-[25px] mq450:pb-[25px] mq450:box-border">
              <div className="self-stretch flex flex-col items-center justify-center gap-[38.9px] gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[15.6px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Initial Consultation
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Labor Costs
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons1.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Materials and Plants
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Equipment and Machinery
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/basic-plan-feature-icons3.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-22.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Permits and Inspection Fees
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-9-1.svg"
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-[23.3px] px-[38px] pb-[23.4px] bg-accent-1 self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-mediumaquamarine">
                  <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center mq450:text-base mq450:leading-[19px]">
                    Purchase
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] flex flex-col items-center justify-center min-w-[283px] max-w-full text-[#fff]">
            <div className="rounded-t-[15.56px] rounded-b-none bg-[#fff] overflow-hidden flex flex-row items-center justify-center py-[31.1px] px-[29px] gap-[31.1px] text-accent-1 mq450:flex-wrap gap-4">
              <div className="relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                Premium Plan
              </div>
              <div className="w-[128.3px] rounded-[97.22px] bg-accent-1 overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[15.6px] px-[18px] pb-[15.5px] box-border text-center text-[#fff]">
                <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                  Promo
                </div>
              </div>
            </div>
            <div className="self-stretch bg-accent-1 border-[#fff] border-b-[2.9px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[35px] text-center text-46xl-1">
              <div className="self-stretch flex flex-col items-center justify-center gap-[15.6px]">
                <div className="self-stretch relative leading-[70px] font-semibold whitespace-nowrap mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
                  $120.00
                </div>
                <div className="self-stretch relative text-base-6 leading-[24px] font-medium font-plus-jakarta-sans">
                  /Per month
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-[15.56px] bg-accent-1 overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[38.8px] text-base-6 font-plus-jakarta-sans mq750:pt-[25px] mq750:pb-[25px] mq750:box-border">
              <div className="self-stretch flex flex-col items-center justify-center gap-[38.9px] gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[15.6px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Initial Consultation
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-6-2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Labor Costs
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-7-2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Materials and Plants
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-8-2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Equipment and Machinery
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-10-1.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Permits and Inspection Fees
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-9-2.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                    <img
                      className="h-[23.3px] w-[23.3px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-23.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Maintenance Packages
                    </div>
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/premium-cost-items.svg"
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-[23.3px] px-[38px] pb-[23.4px] bg-[#fff] self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-gainsboro-200">
                  <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-accent-1 text-center mq450:text-base mq450:leading-[19px]">
                    Purchase
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  className: PropTypes.string,
};

export default Pricing;
