import TestimonialPair from "./TestimonialPair";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1356.9px] flex flex-row items-start justify-center pt-0 px-5 pb-[81.2px] box-border max-w-full text-center text-46xl-1 text-[#232a42] font-montserrat mq1050:pb-[53px] mq1050:box-border mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="w-[1166.6px] flex flex-col items-start justify-start gap-[77.4px] max-w-full gap-[39px] gap-[19px]">
        <div className="w-[1122.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[912.9px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{`See What They Are Saying `}</span>
              <span className="text-[#2da884]">About EcoSculpt</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[37.6px] max-w-full text-left text-base-6 text-[#fff] font-plus-jakarta-sans gap-[19px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between max-w-full gap-5 lg:justify-center">
            <TestimonialPair
              ekoSusiloanto="Eko Susiloanto"
              regionalMobilityManager="Regional Mobility Manager"
              imagePlaceholder="/image-placeholder-8@2x.png"
            />
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto="Tri Cahyono"
              propColor1="#232a42"
              regionalMobilityManager="Human Accounts Supervisor"
              propColor2="#525252"
              imagePlaceholder="/image-placeholder-9@2x.png"
              propTransform="unset"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between max-w-full gap-5">
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto="Tjandra Mangkualam"
              propColor1="#232a42"
              regionalMobilityManager="District Directives Producer"
              propColor2="#525252"
              imagePlaceholder="/image-placeholder-10@2x.png"
              propTransform="unset"
            />
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto="Cak Mukidi"
              propColor1="#232a42"
              regionalMobilityManager="Forward Paradigm Manager"
              propColor2="#525252"
              imagePlaceholder="/image-placeholder-11@2x.png"
              propTransform="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
