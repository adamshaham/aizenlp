import FrameComponent from "./FrameComponent";
import FunctionCard from "./FunctionCard";
import ImgLibIlustrationGraphIco from "./ImgLibIlustrationGraphIco";
import PropTypes from "prop-types";

const ValueSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-row items-start justify-center pt-[124.4px] px-5 pb-[109px] box-border shrink-0 max-w-full z-[1] text-center text-18xl-9 text-[#1c1f25] font-dm-sans lg:pt-[124.4px] lg:pb-[71px] lg:box-border gap-section-spacing-lg mq750:pb-[46px] mq750:box-border ${className}`}
    >
      <div className="h-[990.2px] w-[1170.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[702.8px] box-border gap-[58.4px] max-w-[1170.6px] lg:pb-[457px] lg:box-border lg:max-w-full gap-[29px] mq450:h-auto mq450:pb-[193px] mq450:box-border mq1050:pb-[297px] mq1050:box-border">
        <FrameComponent
          headline="Improve your Continuous Design Data workflow"
          description="Specify helps you gain control of your design system across teams and products."
          iconAI="/iconai-1@2x.png"
          content="Our strategies"
          icon
          showLIcon1={false}
          showRIcon1={false}
        />
        <div className="self-stretch h-[644.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[505.5px] box-border gap-[38.9px] max-w-full shrink-0 text-left text-base-6 font-body-base-regular lg:pb-[329px] lg:box-border gap-[19px] mq750:pb-[214px] mq750:box-border mq450:h-auto">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-x-[23.3px] gap-y-[21.4px] shrink-0 max-w-full">
            <FunctionCard
              propBoxShadow="0px 60.3px 16.53px rgba(56, 127, 245, 0.05), 0px 38.9px 15.56px rgba(56, 127, 245, 0.05), 0px 23.3px 14.58px rgba(56, 127, 245, 0.05), 0px 12.6px 11.67px rgba(56, 127, 245, 0.05), 0px 1.9px 5.83px rgba(56, 127, 245, 0.3)"
              propBorder="1px solid #387ff5"
              iconserverDatabasesDataBr="/iconserver-databases-data-code@2x.png"
              featureHeadline="AI-Driven Forecasts"
              propMinWidth="119px"
              descriptionContentExperie="Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends, and stay steps ahead of your competition. Make informed decisions backed by data-driven insights"
            />
            <FunctionCard
              propBoxShadow="unset"
              propBorder="unset"
              iconserverDatabasesDataBr="/iconserver-databases-data-code1@2x.png"
              featureHeadline={`Connect & Streamline`}
              propMinWidth="129px"
              descriptionContentExperie="Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the gaps in your data ecosystem, ensuring you have a holistic view of your operations"
            />
            <FunctionCard
              iconserverDatabasesDataBr="/iconserver-databases-data-code2@2x.png"
              featureHeadline="Instant Insights"
              descriptionContentExperie="In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly."
            />
          </div>
          <div className="self-stretch h-[466.7px] rounded-[23.33px] [background:linear-gradient(100.26deg,_#809ff0,_#4c62c5)] border-[#d2d5e2] border-[1px] border-solid box-border overflow-y-auto shrink-0 flex flex-row items-start justify-start max-w-full text-lgi-4">
            <ImgLibIlustrationGraphIco />
          </div>
        </div>
      </div>
    </div>
  );
};

ValueSection.propTypes = {
  className: PropTypes.string,
};

export default ValueSection;
