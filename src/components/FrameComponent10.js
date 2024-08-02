import SubHeading from "./SubHeading";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.2px] box-border max-w-full text-left text-33xl text-neutral-n0 font-body-base-regular ${className}`}
    >
      <div className="flex-1 bg-dark-background overflow-hidden flex flex-col items-center justify-start pt-[44.3px] px-5 pb-[44.4px] box-border max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border gap-4 mq1000:pt-[29px] mq1000:pb-[29px] mq1000:box-border">
        <div className="flex flex-col items-center justify-start gap-[39px] max-w-full gap-5">
          <div className="overflow-hidden flex flex-col items-center justify-start max-w-full shrink-0">
            <div className="w-[190.7px] overflow-hidden flex flex-row items-center justify-start pt-[8.9px] px-2 pb-[8.8px] box-border">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] mq450:text-12xl mq450:leading-[37px] mq1000:text-23xl mq1000:leading-[50px]">
                Gallery
              </h1>
            </div>
            <SubHeading
              propPadding="8.8px 8px 8.9px"
              propWidth="571px"
              propHeight="unset"
              weFocusOnErgonomicsAndMee="We focus on ergonomics and meeting you where you work. "
              itsOnlyAKeystrokeAway="It's only a keystroke away."
            />
          </div>
          <div className="w-[885.8px] overflow-x-auto flex flex-row items-center justify-start gap-[29.3px] max-w-full">
            <div className="w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-1@2x.png"
              />
            </div>
            <div className="w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-1@2x.png"
              />
            </div>
            <div className="w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card2@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-2@2x.png"
              />
            </div>
            <div className="w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card3@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-3@2x.png"
              />
            </div>
          </div>
          <div className="w-[963.8px] overflow-x-auto flex flex-row items-center justify-start gap-[29.3px] max-w-full">
            <div className="w-[350.2px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card4@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-4@2x.png"
              />
            </div>
            <div className="w-[199.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card5@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-5@2x.png"
              />
            </div>
            <div className="w-[355.5px] rounded-[10.64px] overflow-hidden shrink-0 flex flex-row items-center justify-start bg-[url('/public/card6@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[252.7px] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/rectangle-1-6@2x.png"
              />
            </div>
          </div>
          <Button
            propBorder="0.9px solid #fff"
            propBackgroundColor="transparent"
            propAlignSelf="unset"
            propPadding="0px 25px 0px 26px"
            propWidth="149.9px"
            tryForFree="See more"
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
