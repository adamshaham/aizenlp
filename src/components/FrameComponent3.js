import QuestionItems from "./QuestionItems";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[82.4px] box-border max-w-full text-center text-46xl-1 text-heading font-montserrat lg:pb-[54px] lg:box-border mq750:pb-[35px] mq750:box-border ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-start justify-start gap-[77.5px] max-w-full gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[949.9px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{`Frequently Asked `}</span>
              <span className="text-accent-1">Questions</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[38.8px] max-w-full text-left text-8xl-2 text-neutral-n0 gap-[19px]">
          <div className="self-stretch shadow-[17.5px_14.6px_34.03px_rgba(0,_0,_0,_0.09)] rounded-[15.56px] bg-accent-1 overflow-hidden flex flex-row flex-wrap items-end justify-center pt-[46.6px] px-[42px] pb-[46.7px] box-border gap-[23.3px] max-w-full lg:pl-[21px] lg:pr-[21px] lg:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[15.6px] min-w-[675px] max-w-full mq1050:min-w-full">
              <div className="self-stretch relative leading-[31.11px] font-semibold shrink-0 mq450:text-3xl mq450:leading-[25px]">
                Do you specialize in both residential and commercial
                landscaping?
              </div>
              <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans shrink-0">
                Yes, we have extensive experience in both residential and
                commercial landscaping. Whether you need to enhance your home's
                curb appeal or create an inviting outdoor space for your
                business, we can help.
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15.7px]">
              <div className="flex flex-row items-start justify-start pt-[19.4px] pb-[19.5px] pl-0 pr-[17px]">
                <div className="h-[23.3px] w-[45.6px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-[23.3px] h-[23.3px]"
                    alt=""
                  />
                  <img
                    className="absolute top-[2.4px] left-[16.6px] w-[29px] h-[17.1px] z-[1]"
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <QuestionItems doYouProvideSustainableAn="Do you provide sustainable and eco-friendly landscaping options?" />
          <QuestionItems
            propHeight="32px"
            doYouProvideSustainableAn=" How do I request a consultation or estimate for my landscaping project?"
          />
          <QuestionItems
            propHeight="32px"
            doYouProvideSustainableAn="What factors influence the cost of a landscaping project?"
          />
          <QuestionItems
            propHeight="32px"
            doYouProvideSustainableAn="How often should I schedule landscape maintenance services?"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
