import SubHeading from "./SubHeading";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.3px] box-border max-w-full text-left text-33xl text-neutral-n0 font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-dark-background overflow-hidden flex flex-col items-center justify-start py-[44.3px] px-5 box-border gap-[44.3px] max-w-full gap-[22px] mq450:pt-[29px] mq450:pb-[29px] mq450:box-border">
        <div className="overflow-hidden flex flex-col items-center justify-start max-w-full">
          <div className="w-[220.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-2 pb-[8.8px] box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
              Partners
            </h1>
          </div>
          <SubHeading
            weFocusOnErgonomicsAndMee="We focus on ergonomics and meeting you where you work. "
            itsOnlyAKeystrokeAway="It's only a keystroke away."
          />
        </div>
        <div className="w-[737.7px] overflow-hidden flex flex-row flex-wrap items-center justify-between gap-5 max-w-full mq725:justify-center">
          <img
            className="h-[53.2px] w-[53.2px] relative overflow-hidden shrink-0"
            alt=""
            src="/logosappleappstore.svg"
          />
          <img
            className="h-[53.8px] w-[53.2px] relative overflow-hidden shrink-0"
            alt=""
            src="/logosapiary.svg"
          />
          <img
            className="h-[62.5px] w-[53.2px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logosandroidicon.svg"
          />
          <img
            className="h-[53.2px] w-[63.9px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logosbasecamp.svg"
          />
          <img
            className="h-[57.4px] w-[53.2px] relative overflow-hidden shrink-0"
            alt=""
            src="/logosairbnb.svg"
          />
          <img
            className="h-[53.2px] w-[132.9px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logosibm.svg"
          />
        </div>
        <Button
          propBorder="0.9px solid #fff"
          propBackgroundColor="transparent"
          propAlignSelf="unset"
          propPadding="0px 25px 0px 26px"
          propWidth="unset"
          tryForFree="All Partners"
        />
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
