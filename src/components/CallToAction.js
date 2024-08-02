import Button from "./Button";
import PropTypes from "prop-types";

const CallToAction = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[68.2px] box-border gap-[31px] max-w-full mq1050:pb-11 mq1050:box-border gap-[15px] mq725:pb-[29px] mq725:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[31px] max-w-full mq450:flex-wrap gap-4">
          <Button
            propBorder="none"
            propBackgroundColor="#4452fe"
            propAlignSelf="unset"
            propPadding="8.8px 26px 9px"
            propWidth="unset"
            tryForFree="Try For Free"
          />
          <Button
            propBorder="0.9px solid #fff"
            propBackgroundColor="transparent"
            propAlignSelf="unset"
            propPadding="7px 25px 8px 26px"
            propWidth="unset"
            tryForFree="Learn More"
          />
        </div>
      </div>
      <div className="self-stretch h-[880.4px] relative">
        <div className="absolute w-[calc(100%_-_23.9px)] top-[0px] right-[11.9px] left-[12px] h-[745.7px] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="h-[481.2px] w-[631.9px] absolute !m-[0] top-[0px] left-[364.5px] object-contain"
            alt=""
            src="/dashboard-1@2x.png"
          />
          <img
            className="h-[493.2px] w-[647.5px] absolute !m-[0] right-[48.1px] bottom-[12px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/chat-bot@2x.png"
          />
          <img
            className="h-[481.6px] w-[632.4px] absolute !m-[0] bottom-[0.1px] left-[47.8px] object-contain z-[1]"
            alt=""
            src="/boards@2x.png"
          />
        </div>
        <div className="absolute h-[55.49%] w-full top-[44.51%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#0e0e0e_66.15%)] z-[2]" />
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
