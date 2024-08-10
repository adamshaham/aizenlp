import ArticleItems from "./ArticleItems";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const contentData = {
    titlePart1: "Blog And ",
    titlePart2: "Articles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
    article1: {
      category: "Tips",
      title: "Choosing the Right Plants for Your Climate Zone",
      likes: "10",
      views: "10K",
      timeAgo: "5 min ago",
      excerpt: [
        "Lorem ipsum dolor sit amet, consectetur adipisci",
        "ng elit. Vivamus hendrerit suscipit egestas. Nun",
        "eget congue ante. Vivamus ut sapien et ex vol",
        "utpat tincidunt eget at felis...",
      ],
      buttonText: "Read More",
    },
    articleItems: [
      {
        imagePlaceholder: "/image-placeholder-13@2x.png",
        title: "How to Create a Low Maintenance Landscape",
        likes: "50",
        views: "15K",
        timeAgo: "7 min ago",
        icon: "/icon-7.svg",
      },
      {
        imagePlaceholder: "/image-placeholder-14@2x.png",
        title: "Landscaping Trends for the Modern Homeowner",
        likes: "100",
        views: "20K",
        timeAgo: "10 min ago",
        icon: "/icon-6.svg",
      },
    ],
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[79px] box-border max-w-full text-center text-[65px] text-[#232a42] font-montserrat mq1050:pb-[51px] mq1050:box-border mq750:pb-[33px] mq750:box-border ${className}`}
    >
      <div className="w-[1209.4px] flex flex-col items-start justify-start gap-[77.5px] max-w-full shrink-0 gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[692.2px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-[52px] mq1050:leading-[56px] mq450:text-[40px] mq450:leading-[42px]">
              <span>{contentData.titlePart1}</span>
              <span className="text-[#2da884]">{contentData.titlePart2}</span>
            </div>
            <div className="self-stretch relative text-[15.6px] leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38.9px] max-w-full text-left text-[15.6px] text-[#2da884] gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23.3px] min-w-[283px] max-w-full">
            <div className="self-stretch rounded-[15.56px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[311.1px] flex-1 relative rounded-[15.56px] max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/image-placeholder-12@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                {contentData.article1.category}
              </div>
              <div className="self-stretch h-[303.3px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[38.9px] text-[#525252] font-plus-jakarta-sans gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px] shrink-0">
                  <div className="self-stretch relative text-[27.2px] leading-[31.11px] font-semibold font-montserrat text-[#232a42] mq450:text-[22px] mq450:leading-[25px]">
                    {contentData.article1.title}
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
                        {contentData.article1.likes}
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
                        {contentData.article1.views}
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7.8px]">
                        <img
                          className="h-[23.3px] w-[23.3px] relative"
                          loading="lazy"
                          alt=""
                          src="/icon-6.svg"
                        />
                        <div className="relative leading-[24px] font-medium inline-block min-w-[72px]">
                          {contentData.article1.timeAgo}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[23.33px] font-medium">
                    {contentData.article1.excerpt.map((line, index) => (
                      <p className="m-0" key={index}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[23.3px] px-[38px] pb-[23.4px] bg-[#2da884] self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#47c29e]">
                  <div className="flex-1 relative text-[24px] leading-[24px] font-semibold font-montserrat text-[#fff] text-center">
                    {contentData.article1.buttonText}
                  </div>
                </button>
              </div>
            </div>
          </div>
          {contentData.articleItems.map((item, index) => (
            <ArticleItems
              key={index}
              imagePlaceholder={item.imagePlaceholder}
              howToCreateALowMaintenanc={item.title}
              prop={item.likes}
              group59="/group-59.svg"
              k={item.views}
              icon={item.icon}
              minAgo={item.timeAgo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
