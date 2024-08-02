import { useMemo } from "react";
import PropTypes from "prop-types";

const NewsCard = ({
  className = "",
  cardImage,
  propWidth,
  ourCreativeTeam,
  propDisplay,
  propMinWidth,
  byStiveSmithi,
  propMinWidth1,
  runningRemoteOffsitesAndO,
}) => {
  const cardContentStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const ourCreativeTeamStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const byStiveSmithiStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[25.6px] box-border relative gap-[26.2px] min-w-[316px] max-w-full text-left text-smi-3 text-gray-200 font-body-base-regular ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[8.75px] border-black1 border-[1.8px] border-solid box-border opacity-[0.1]" />
      <img
        className="self-stretch h-[313.3px] relative rounded-t-[8.75px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={cardImage}
      />
      <div
        className="w-[450px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full"
        style={cardContentStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[19.6px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17.4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div
                className="relative text-sm leading-[22.8px] inline-block min-w-[124.3px] z-[1]"
                style={ourCreativeTeamStyle}
              >
                {ourCreativeTeam}
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                <div className="relative leading-[20px] font-medium inline-block min-w-[81px] z-[1]">
                  17 June, 2021
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                <div
                  className="relative leading-[20px] font-medium inline-block min-w-[88px] z-[1]"
                  style={byStiveSmithiStyle}
                >
                  {byStiveSmithi}
                </div>
              </div>
            </div>
            <div className="relative text-lgi-3 leading-[150%] font-medium text-black1 inline-block max-w-full z-[1]">
              {runningRemoteOffsitesAndO}
            </div>
            <div className="w-[373.6px] relative leading-[160%] inline-block max-w-full z-[1]">
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et vel `}</p>
              <p className="m-0">tellus dignissim quis.</p>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[8.8px] px-4 pb-[8.7px] bg-blueviolet-200 w-[93px] rounded-[4.38px] flex flex-row items-start justify-start box-border z-[1] hover:bg-blueviolet-100">
            <div className="relative text-smi-3 tracking-[0.05em] leading-[20px] font-medium font-body-base-regular text-neutral-n0 text-left inline-block min-w-[59px]">
              Continue
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  className: PropTypes.string,
  cardImage: PropTypes.string,
  ourCreativeTeam: PropTypes.string,
  byStiveSmithi: PropTypes.string,
  runningRemoteOffsitesAndO: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default NewsCard;
