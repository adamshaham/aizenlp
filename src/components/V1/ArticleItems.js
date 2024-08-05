import { useMemo } from "react";
import PropTypes from "prop-types";

const ArticleItems = ({
  className = "",
  imagePlaceholder,
  howToCreateALowMaintenanc,
  prop,
  propMinWidth,
  group59,
  k,
  propMinWidth1,
  icon,
  minAgo,
  propMinWidth2,
}) => {
  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const kStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const minAgoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[23.3px] min-w-[283px] max-w-full text-left text-base-6 text-[#2da884] font-montserrat ${className}`}
    >
      <div className="self-stretch h-[311.1px] relative rounded-[15.56px] bg-[#fff] overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_155.55px)] left-[calc(50%_-_188.6px)] rounded-[15.56px] w-full h-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={imagePlaceholder}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
        <div className="self-stretch relative leading-[24px] font-semibold shrink-0">
          Insight
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[38.9px] shrink-0 text-[#525252] font-plus-jakarta-sans gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15.6px]">
            <div className="self-stretch relative text-8xl-2 leading-[31.11px] font-semibold font-montserrat text-[#232a42] mq450:text-3xl mq450:leading-[25px]">
              {howToCreateALowMaintenanc}
            </div>
            <div className="flex flex-row items-start justify-start gap-[7.8px]">
              <div className="flex flex-row items-center justify-start gap-[7.8px]">
                <img
                  className="h-[23.3px] w-[23.3px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-58.svg"
                />
                <div
                  className="relative leading-[24px] font-medium inline-block min-w-[21px]"
                  style={divStyle}
                >
                  {prop}
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7.8px]">
                <img
                  className="h-[23.3px] w-[23.3px] relative"
                  loading="lazy"
                  alt=""
                  src={group59}
                />
                <div
                  className="relative leading-[24px] font-medium inline-block min-w-[26px]"
                  style={kStyle}
                >
                  {k}
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.8px]">
                  <img
                    className="h-[23.3px] w-[23.3px] relative"
                    alt=""
                    src={icon}
                  />
                  <div
                    className="relative leading-[24px] font-medium inline-block min-w-[71px]"
                    style={minAgoStyle}
                  >
                    {minAgo}
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
          <button className="cursor-pointer [border:none] py-[23.3px] px-[38px] bg-[#2da884] self-stretch rounded-[97.22px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#47c29e]">
            <div className="flex-1 relative text-xl-4 leading-[24px] font-semibold font-montserrat text-[#fff] text-center">
              Read More
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

ArticleItems.propTypes = {
  className: PropTypes.string,
  imagePlaceholder: PropTypes.string,
  howToCreateALowMaintenanc: PropTypes.string,
  prop: PropTypes.string,
  group59: PropTypes.string,
  k: PropTypes.string,
  icon: PropTypes.string,
  minAgo: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default ArticleItems;
