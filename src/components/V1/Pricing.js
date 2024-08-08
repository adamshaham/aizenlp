import BasicPlan from "./BasicPlan";
import PropTypes from "prop-types";

const contentData = {
  titlePart1: "Pricing ",
  titlePart2: "Table",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
  plans: [
    {
      name: "Basic Plan",
      price: "$40.00",
      period: "/Per month",
      features: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery"
      ],
      purchaseButton: "Purchase"
    },
    {
      name: "Standard Plan",
      price: "$80.00",
      period: "/Per month",
      features: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery",
        "Permits and Inspection Fees"
      ],
      purchaseButton: "Purchase"
    },
    {
      name: "Premium Plan",
      price: "$120.00",
      period: "/Per month",
      promo: "Promo",
      features: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery",
        "Permits and Inspection Fees",
        "Maintenance Packages"
      ],
      purchaseButton: "Purchase"
    }
  ]
};

const Pricing = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[76.5px] box-border max-w-full text-center text-46xl-1 text-[#232a42] font-montserrat lg:pb-[50px] lg:box-border mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="w-[1440.4px] flex flex-col items-start justify-start gap-[77.4px] max-w-full shrink-0 gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full">
          <div className="w-[708.8px] flex flex-col items-start justify-start gap-[23.4px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{contentData.titlePart1}</span>
              <span className="text-[#2da884]">{contentData.titlePart2}</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38.9px] max-w-full text-left text-xl-4 text-[#2da884] gap-[19px]">
          {contentData.plans.map((plan, index) => (
            <div key={index} className="flex-1 shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] flex flex-col items-center justify-center min-w-[283px] max-w-full">
              <BasicPlan basicPlan={plan.name} />
              <div className="self-stretch bg-[#fff] border-[#2da884] border-b-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[38.9px] px-[38px] pb-[37px] text-center text-46xl-1">
                <div className="self-stretch flex flex-col items-center justify-center gap-[15.6px]">
                  <div className="self-stretch relative leading-[70px] font-semibold whitespace-nowrap mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
                    {plan.price}
                  </div>
                  <div className="self-stretch relative text-base-6 leading-[24px] font-medium font-plus-jakarta-sans">
                    {plan.period}
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-[15.56px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start py-[38.9px] px-[38px] text-base-6 font-plus-jakarta-sans mq450:pt-[25px] mq450:pb-[25px] mq450:box-border">
                <div className="self-stretch flex flex-col items-center justify-center gap-[38.9px] gap-[19px]">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[15.6px]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="self-stretch flex flex-row items-center justify-start gap-[15.6px]">
                        <img
                          className="h-[23.3px] w-[23.3px] relative"
                          loading="lazy"
                          alt=""
                          src="/icon-22.svg"
                        />
                        <div className="flex-1 relative leading-[24px] font-medium">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="cursor-pointer [border:none] pt-[23.4px] px-[38px] pb-[23.3px] bg-[#2da884] self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center hover:bg-[#47c29e]">
                    <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center mq450:text-base mq450:leading-[19px]">
                      {plan.purchaseButton}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  className: PropTypes.string,
};

export default Pricing;
