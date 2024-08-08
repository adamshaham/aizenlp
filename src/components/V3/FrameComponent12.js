import Adress from "./Adress";
import Subtitle from "./Subtitle";
import Card from "./Card";
import PropTypes from "prop-types";

const contentData = {
  heading: "Testimonials",
  testimonialText: [
    "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    "Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
  ],
  user1: "Claire Bell",
  user2: "Ralph Fisher",
  user3: "Francisco Lane",
  user4: "Jorge Murphy"
};

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.3px] box-border max-w-full text-left text-33xl text-[#fff] font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-[#181818] overflow-hidden flex flex-col items-center justify-start pt-[44.4px] px-5 pb-[44.3px] box-border gap-[44.3px] max-w-full gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border mq1000:pt-[29px] mq1000:pb-[29px] mq1000:box-border">
        <div className="w-[321.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.8px] px-2 pb-[8.9px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
            {contentData.heading}
          </h1>
        </div>
        <div className="w-[782.9px] overflow-hidden flex flex-row flex-center items-center justify-start gap-[20.4px] max-w-full text-base font-button1">
          <div className="flex-1 flex flex-col items-center justify-start gap-[17.7px] min-w-[248px] max-w-full">
            <div className="self-stretch rounded-[8.87px] bg-[#181818] border-[#dedede] border-[0.9px] border-solid flex flex-col items-start justify-start py-[34px] pl-[35px] pr-[25px] gap-[26.6px]">
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[11.5px]">
                <img
                  className="h-[44.3px] w-[44.3px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <Adress
                    propAlignSelf="unset"
                    propFlex="unset"
                    propPadding="0px 8px"
                    propWidth="unset"
                    placeholderLabel={contentData.user1}
                    propWidth1="unset"
                    propTextAlign="left"
                    propTextDecoration="unset"
                    propMinWidth="79px"
                    propDisplay="inline-block"
                    propFlex1="unset"
                  />
                  <Subtitle />
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.2px] leading-[24px]">
                  {contentData.testimonialText.map((line, index) => (
                    <p key={index} className="m-0 font-body-base-regular">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <Card avatar="/avatar-1@2x.png" placeholderLabel={contentData.user2} />
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[17.7px] min-w-[48px] max-w-full">
            <Card
              propWidth="190.6px"
              avatar="/avatar-2@2x.png"
              propFlex="1"
              placeholderLabel={contentData.user3}
            />
            <Card
              propWidth="181.6px"
              avatar="/avatar-3@2x.png"
              propFlex="1"
              placeholderLabel={contentData.user4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
