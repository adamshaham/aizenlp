import NewsCard from "./NewsCard";
import PropTypes from "prop-types";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[107.5px] box-border max-w-full shrink-0 text-center text-19xl-5 text-[#051114] font-body-base-regular mq450:pb-[45px] mq450:box-border mq800:pb-[70px] mq800:box-border ${className}`}
    >
      <div className="w-[997.4px] flex flex-col items-start justify-start gap-[52.5px] max-w-full gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
          <div className="w-[405px] relative leading-[130%] font-semibold inline-block mq450:text-4xl mq450:leading-[30px] mq800:text-12xl mq800:leading-[40px]">
            Lastest insights news
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[26.2px] max-w-full text-left text-smi-3 text-[#051114b3]">
          <NewsCard
            cardImage="/rectangle-33@2x.png"
            ourCreativeTeam="Our Creative Team"
            byStiveSmithi="by Stive Smithi"
            runningRemoteOffsitesAndO="Running remote offsites and onbordings"
          />
          <NewsCard
            cardImage="/rectangle-33-1@2x.png"
            propWidth="472.9px"
            ourCreativeTeam="Create presentations"
            propDisplay="unset"
            propMinWidth="unset"
            byStiveSmithi="by Thomas lews"
            propMinWidth1="96px"
            runningRemoteOffsitesAndO={`A new look & new ways to collaborate`}
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
