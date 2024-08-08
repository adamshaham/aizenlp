import SubHeading from "./SubHeading";
import Button from "./Button";
import PropTypes from "prop-types";

const contentData = {
  heading: "Gallery",
  subHeading: {
    textLines: [
      "We focus on ergonomics and meeting you where you work.",
      "It's only a keystroke away."
    ],
    padding: "8.8px 8px 8.9px",
    width: "571px",
    height: "unset"
  },
  images: [
    { src: "/rectangle-1@2x.png", bg: "/public/card@3x.png" },
    { src: "/rectangle-1-1@2x.png", bg: "/public/card1@3x.png" },
    { src: "/rectangle-1-2@2x.png", bg: "/public/card2@3x.png" },
    { src: "/rectangle-1-3@2x.png", bg: "/public/card3@3x.png" },
    { src: "/rectangle-1-4@2x.png", bg: "/public/card4@3x.png" },
    { src: "/rectangle-1-5@2x.png", bg: "/public/card5@3x.png" },
    { src: "/rectangle-1-6@2x.png", bg: "/public/card6@3x.png" }
  ],
  button: {
    border: "0.9px solid #fff",
    backgroundColor: "transparent",
    alignSelf: "unset",
    padding: "0px 0px 0px 7px",
    width: "150.9px",
    label: "See more"
  }
};

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.2px] box-border text-left text-33xl text-[#fff] font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-[#181818] overflow-hidden flex flex-col items-center justify-start pt-[44.3px] px-5 pb-[44.4px] box-border mq450:pt-5 mq450:pb-5 mq450:box-border gap-4 mq1000:pt-[29px] mq1000:pb-[29px] mq1000:box-border">
        <div className="w-[1440px] flex flex-col items-center justify-start gap-[39px] max-w-full gap-5">
          <div className=" overflow-hidden flex flex-col items-center justify-start max-w-full shrink-0">
            <div className="w-[190.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-2 pb-[8.8px] box-border">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
                {contentData.heading}
              </h1>
            </div>
            <SubHeading
              propPadding={contentData.subHeading.padding}
              propWidth={contentData.subHeading.width}
              propHeight={contentData.subHeading.height}
              weFocusOnErgonomicsAndMee={contentData.subHeading.textLines[0]}
              itsOnlyAKeystrokeAway={contentData.subHeading.textLines[1]}
            />
          </div>
          <div className="w-[885.8px] overflow-x-auto flex flex-row items-center justify-start gap-[29.3px] max-w-full">
            {contentData.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-cover bg-no-repeat bg-[top]`}
                style={{ backgroundImage: `url(${image.bg})` }}
              >
                <img
                  className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src={image.src}
                />
              </div>
            ))}
          </div>
          <div className="w-[1063.8px] overflow-x-auto flex flex-row items-center justify-center gap-[29.3px] max-w-full">
            {contentData.images.slice(4).map((image, index) => (
              <div
                key={index}
                className={`w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-cover bg-no-repeat bg-[top]`}
                style={{ backgroundImage: `url(${image.bg})` }}
              >
                <img
                  className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src={image.src}
                />
              </div>
            ))}
          </div>
          <Button
            propBorder={contentData.button.border}
            propBackgroundColor={contentData.button.backgroundColor}
            propAlignSelf={contentData.button.alignSelf}
            propPadding={contentData.button.padding}
            propWidth={contentData.button.width}
            tryForFree={contentData.button.label}
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
