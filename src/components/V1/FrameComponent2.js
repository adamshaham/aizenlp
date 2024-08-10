import TestimonialPair from "./TestimonialPair";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const contentData = {
    titlePart1: "See What They Are Saying ",
    titlePart2: "About EcoSculpt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
    testimonials: [
      {
        name: "Eko Susiloanto",
        title: "Regional Mobility Manager",
        image: "/image-placeholder-8@2x.png",
      },
      {
        name: "Tri Cahyono",
        title: "Human Accounts Supervisor",
        image: "/image-placeholder-9@2x.png",
      },
      {
        name: "Tjandra Mangkualam",
        title: "District Directives Producer",
        image: "/image-placeholder-10@2x.png",
      },
      {
        name: "Cak Mukidi",
        title: "Forward Paradigm Manager",
        image: "/image-placeholder-11@2x.png",
      },
    ],
  };

  return (
    <section
      className={`w-[1440.9px] flex flex-row items-center justify-center pt-0 px-5 pb-[81.2px] box-border max-w-full text-center text-[65px] text-[#232a42] font-montserrat mq1050:pb-[53px] mq1050:box-border mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="w-[1166.6px] pr-[450px] flex flex-col items-start justify-start gap-[77.4px] max-w-full">
        <div className="w-[1122.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[912.9px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-[52px] mq1050:leading-[56px] mq450:text-[40px] mq450:leading-[42px]">
              <span>{contentData.titlePart1}</span>
              <span className="text-[#2da884]">{contentData.titlePart2}</span>
            </div>
            <div className="self-stretch relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[37.6px] max-w-full text-left text-[15.6px] text-[#fff] font-plus-jakarta-sans gap-[19px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between max-w-full gap-5 lg:justify-center">
            <TestimonialPair
              ekoSusiloanto={contentData.testimonials[0].name}
              regionalMobilityManager={contentData.testimonials[0].title}
              imagePlaceholder={contentData.testimonials[0].image}
            />
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto={contentData.testimonials[1].name}
              propColor1="#232a42"
              regionalMobilityManager={contentData.testimonials[1].title}
              propColor2="#525252"
              imagePlaceholder={contentData.testimonials[1].image}
              propTransform="unset"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between max-w-full gap-5">
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto={contentData.testimonials[2].name}
              propColor1="#232a42"
              regionalMobilityManager={contentData.testimonials[2].title}
              propColor2="#525252"
              imagePlaceholder={contentData.testimonials[2].image}
              propTransform="unset"
            />
            <TestimonialPair
              propBackgroundColor="#fff"
              propColor="#525252"
              propPadding="unset"
              propPadding1="unset"
              ekoSusiloanto={contentData.testimonials[3].name}
              propColor1="#232a42"
              regionalMobilityManager={contentData.testimonials[3].title}
              propColor2="#525252"
              imagePlaceholder={contentData.testimonials[3].image}
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
