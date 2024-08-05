import ArticleItems from "./ArticleItems";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[79px] box-border max-w-full text-center text-46xl-1 text-heading font-montserrat mq1050:pb-[51px] mq1050:box-border mq750:pb-[33px] mq750:box-border ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-start justify-start gap-[77.5px] max-w-full shrink-0 gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[692.2px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{`Blog And `}</span>
              <span className="text-accent-1">Articles</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38.9px] max-w-full text-left text-base-6 text-accent-1 gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23.3px] min-w-[283px] max-w-full">
            <div className="self-stretch rounded-[15.56px] bg-neutral-n0 overflow-hidden flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[311.1px] flex-1 relative rounded-[15.56px] max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/image-placeholder-12@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Tips
              </div>
              <div className="self-stretch h-[303.3px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[38.9px] text-paragraph font-plus-jakarta-sans gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px] shrink-0">
                  <div className="self-stretch relative text-8xl-2 leading-[31.11px] font-semibold font-montserrat text-heading mq450:text-3xl mq450:leading-[25px]">
                    Choosing the Right Plants for Your Climate Zone
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[7.8px]">
                    <div className="flex flex-row items-center justify-start gap-[7.8px]">
                      <img
                        className="h-[23.3px] w-[23.3px] relative"
                        loading="lazy"
                        alt=""
                        src="/group-58.svg"
                      />
                      <div className="relative leading-[24px] font-medium inline-block min-w-[18px]">
                        10
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[7.8px]">
                      <img
                        className="h-[23.3px] w-[23.3px] relative"
                        loading="lazy"
                        alt=""
                        src="/group-59.svg"
                      />
                      <div className="relative leading-[24px] font-medium inline-block min-w-[28px]">
                        10K
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7.8px]">
                        <img
                          className="h-[23.3px] w-[23.3px] relative"
                          loading="lazy"
                          alt=""
                          src="/icon-6.svg"
                        />
                        <div className="relative leading-[24px] font-medium inline-block min-w-[72px]">
                          5 min ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[23.33px] font-medium">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisci
                    </p>
                    <p className="m-0">
                      ng elit. Vivamus hendrerit suscipit egestas. Nun
                    </p>
                    <p className="m-0">
                      eget congue ante. Vivamus ut sapien et ex vol
                    </p>
                    <p className="m-0">utpat tincidunt eget at felis...</p>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[23.3px] px-[38px] pb-[23.4px] bg-accent-1 self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumaquamarine">
                  <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-neutral-n0 text-center">
                    Read More
                  </div>
                </button>
              </div>
            </div>
          </div>
          <ArticleItems
            imagePlaceholder="/image-placeholder-13@2x.png"
            howToCreateALowMaintenanc="How to Create a Low Maintenance Landscape"
            prop="50"
            group59="/group-59.svg"
            k="15K"
            icon="/icon-7.svg"
            minAgo="7 min ago"
          />
          <ArticleItems
            imagePlaceholder="/image-placeholder-14@2x.png"
            howToCreateALowMaintenanc="Landscaping Trends for the Modern Homeowner"
            prop="100"
            propMinWidth="29px"
            group59="/group-59-2.svg"
            k="20K"
            propMinWidth1="31px"
            icon="/icon-6.svg"
            minAgo="10 min ago"
            propMinWidth2="80px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
