import SubHeading from "./SubHeading";
import TextBlock from "./TextBlock";
import Title from "./Title";
import Paragraphe from "./Paragraphe";
import PropTypes from "prop-types";

const contentData = {
  heading: "FEATURES",
  subHeading: {
    textLines: [
      "Most calendars are designed for teams. Slate is designed for",
      "freelancers who want a simple way to plan their schedule.",
    ],
    padding: "0px 8px",
    width: "516px",
    height: "53.2px",
  },
  textBlocks: [
    {
      iconType: "/vector1.svg",
      aSingleSource: "A single source ",
      everWonderedIfYoureTooRel: "When you add work to your ",
      onAClientForWorkSlateHelp: "Slate calendar we automatically ",
      youIdentify: "calculate useful insights ",
    },
    {
      iconType: "/vector-11.svg",
      aSingleSource: "Intuitive ",
      everWonderedIfYoureTooRel: "When you add work to your ",
      onAClientForWorkSlateHelp: "Slate calendar we automatically ",
      youIdentify: "calculate useful insights ",
    },
  ],
  title: {
    designWithRealData: "Or with rules",
  },
  paragraph: {
    text: [
      "When you add work to your ",
      "Slate calendar we automatically ",
      "calculate useful insights ",
    ],
    width: "266.7px",
  },
  images: {
    main: "/chat-bot-1@2x.png",
    secondary: "/line-chart-1@2x.png",
  },
};

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[68.2px] pl-[21px] pr-5 box-border  text-left text-[52px] text-[#fff] font-body-base-regular mq725:pb-[29px] mq725:box-border mq1000:pb-11 mq1000:box-border ${className}`}
    >
      <div className="w-[1200.7px] flex flex-col items-start justify-start gap-[71px] max-w-full gap-[18px] gap-[35px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[139.1px] w-[533.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[77.1px] box-border gap-6 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="overflow-hidden flex flex-row items-start justify-start shrink-0">
                <h1 className="m-0 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-[31px] mq450:leading-[37px] mq1000:text-[42px] mq1000:leading-[50px]">
                  {contentData.heading}
                </h1>
              </div>
            </div>
            <SubHeading
              propPadding={contentData.subHeading.padding}
              propWidth={contentData.subHeading.width}
              propHeight={contentData.subHeading.height}
              weFocusOnErgonomicsAndMee={contentData.subHeading.textLines[0]}
              itsOnlyAKeystrokeAway={contentData.subHeading.textLines[1]}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center gap-[23.9px] shrink-0 max-w-full text-[20px] mq1000:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start pt-[0.4px] pb-0 pl-6 pr-0 box-border min-w-[434px] max-w-full mq725:min-w-full">
            <div className="h-[673px] flex-1 relative max-w-full">
              <img
                className="absolute top-[0px] left-[0px] w-[517.1px] h-[584.3px] object-cover"
                alt=""
                src={contentData.images.main}
              />
              <img
                className="absolute top-[428.3px] left-[200.3px] w-[354.7px] h-[244.7px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src={contentData.images.secondary}
              />
            </div>
          </div>
          <div className="w-[434px] flex flex-col items-start justify-end pt-0 px-0 pb-[24.4px] box-border min-w-[274px] mq1000:flex-1">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[17.7px] px-[17px] gap-[22.2px]">
              {contentData.textBlocks.map((block, index) => (
                <TextBlock
                  key={index}
                  iconType={block.iconType}
                  aSingleSource={block.aSingleSource}
                  ofTruth={block.ofTruth}
                  everWonderedIfYoureTooRel={block.everWonderedIfYoureTooRel}
                  onAClientForWorkSlateHelp={block.onAClientForWorkSlateHelp}
                  youIdentify={block.youIdentify}
                />
              ))}
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="w-[178.1px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="h-[47px] overflow-hidden flex flex-col items-center justify-start pt-[16.9px] px-0 pb-[16.8px] box-border">
                    <img
                      className="w-[36.4px] h-[16.8px] relative"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                  <Title
                    propWidth="unset"
                    propFlex="1"
                    designWithRealData={contentData.title.designWithRealData}
                    propColor="#fff"
                    propTextAlign="left"
                    propFlex1="1"
                    propWidth1="unset"
                    propDisplay="unset"
                    propMinWidth="unset"
                  />
                </div>
                <Paragraphe
                  propWidth={contentData.paragraph.width}
                  propWidth1="unset"
                  propColor="#fff"
                  propTextAlign="left"
                  propFlex="1"
                  propMinHeight="96px"
                  everWonderedIfYoureTooRel={contentData.paragraph.text[0]}
                  onAClientForWorkSlateHelp={contentData.paragraph.text[1]}
                  youIdentify={contentData.paragraph.text[2]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
