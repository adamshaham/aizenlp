import Button from "./Button";
import PropTypes from "prop-types";

const contentData = {
  buttons: [
    {
      border: "none",
      backgroundColor: "#4452fe",
      alignSelf: "unset",
      padding: "8.8px 26px 9px",
      width: "unset",
      label: "Try For Free"
    },
    {
      border: "0.9px solid #fff",
      backgroundColor: "transparent",
      alignSelf: "unset",
      padding: "7px 25px 8px 26px",
      width: "unset",
      label: "Learn More"
    }
  ],
  backgroundGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0), #0e0e0e 66.15%)"
};

const CallToAction = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[68.2px] box-border gap-[31px] max-w-full mq1050:pb-11 mq1050:box-border gap-[15px] mq725:pb-[29px] mq725:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[31px] max-w-full mq450:flex-wrap gap-4">
          {contentData.buttons.map((button, index) => (
            <Button
              key={index}
              propBorder={button.border}
              propBackgroundColor={button.backgroundColor}
              propAlignSelf={button.alignSelf}
              propPadding={button.padding}
              propWidth={button.width}
              tryForFree={button.label}
            />
          ))}
        </div>
      </div>
      <div className="self-stretch h-[300.4px] relative">
        <div
          className="absolute h-[55.49%] w-full top-[44.51%] right-[0%] bottom-[0%] left-[0%] z-[2]"
          style={{ background: contentData.backgroundGradient }}
        />
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
