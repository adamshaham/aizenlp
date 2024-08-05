import { useMemo } from "react";
import SmallEyebrowTagLabelStyle from "./SmallEyebrowTagLabelStyle";
import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const SecitonHeadlingLevel1 = ({
  className = "",
  propGap,
  propFlex,
  propMinWidth,
  headline,
  propTextAlign,
  propAlignSelf,
  description,
  propTextAlign1,
  iconAI,
  content,
  icon,
  lIcon,
  lIcon1,
  buttonText,
  buttonText1,
  rIcon,
  rIcon1,
  showRIcon,
  showRIcon1,
  showLIcon,
  showLIcon1,
}) => {
  const secitonHeadlingLevel111Style = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propGap, propFlex, propMinWidth]);

  const headlineStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const descrWrapperStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const descriptionStyle = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div
      className={`w-full flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-stack-3xl max-w-[777.78px] shrink-0 text-center text-18xl-9 text-[#1c1f25] font-dm-sans gap-stack-3xl mq1050:max-w-full ${className}`}
      style={secitonHeadlingLevel111Style}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-stack-lg1 max-w-full">
        <SmallEyebrowTagLabelStyle
          content={content}
          icon={icon}
          propWidth="unset"
          iconAI={iconAI}
          propDisplay="inline-block"
          propMinWidth="93px"
        />
        <div className="self-stretch flex flex-row items-center justify-start max-w-full shrink-0">
          <b
            className="flex-1 relative leading-[44px] inline-block max-w-full mq450:text-4xl mq450:leading-[26px] mq1050:text-11xl mq1050:leading-[35px]"
            style={headlineStyle}
          >
            {headline}
          </b>
        </div>
        <div
          className="w-full flex flex-row items-center justify-start py-0 px-[19px] box-border max-w-[797.22px] shrink-0 text-base-6 text-dimgray-200 font-body-base-regular mq1050:max-w-full"
          style={descrWrapperStyle}
        >
          <div
            className="flex-1 relative leading-[160%] inline-block max-w-full"
            style={descriptionStyle}
          >
            {description}
          </div>
        </div>
      </div>
      <div className="w-[279px] h-[] hidden flex-row items-start justify-start gap-[11.7px]">
        <ButtonText
          showRIcon={showRIcon}
          showLIcon={showLIcon}
          buttonText={buttonText}
          propAlignSelf="unset"
          propBorderRadius="11.67px"
          propBorder="none"
          propBackgroundColor="#387ff5"
          propWidth="unset"
          propBackdropFilter="unset"
          propFlex="1"
          propPadding="11.7px 19px"
          propBackground="unset"
          propHeight="unset"
          lIcon={lIcon}
          propHeight1="23.3px"
          propWidth1="23.3px"
          propMinHeight="23px"
          propAlignSelf1="unset"
          propHeight2="unset"
          propFlex1="1"
          propAlignSelf2="unset"
          propWidth2="89px"
          propMinWidth="unset"
          propColor="#fff"
          propDisplay="inline-block"
          propHeight3="19px"
          rIcon={rIcon}
          propHeight4="23.3px"
          propWidth3="23.3px"
          propMinHeight1="23px"
        />
        <ButtonText
          showRIcon={showRIcon1}
          showLIcon={showLIcon1}
          buttonText={buttonText1}
          propAlignSelf="stretch"
          propBorderRadius="11.67px"
          propBorder="1px solid #b6d1fb"
          propBackgroundColor="#fff"
          propWidth="124px"
          propBackdropFilter="blur(11.67px)"
          propFlex="unset"
          propPadding="11.7px 18px"
          propBackground="unset"
          propHeight="unset"
          lIcon={lIcon1}
          propHeight1="23.3px"
          propWidth1="23.3px"
          propMinHeight="23px"
          propAlignSelf1="stretch"
          propHeight2="unset"
          propFlex1="1"
          propAlignSelf2="stretch"
          propWidth2="71px"
          propMinWidth="unset"
          propColor="#387ff5"
          propDisplay="inline-block"
          propHeight3="unset"
          rIcon={rIcon1}
          propHeight4="23.3px"
          propWidth3="23.3px"
          propMinHeight1="23px"
        />
      </div>
    </div>
  );
};

SecitonHeadlingLevel1.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  iconAI: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.bool,
  lIcon: PropTypes.string,
  lIcon1: PropTypes.string,
  buttonText: PropTypes.string,
  buttonText1: PropTypes.string,
  rIcon: PropTypes.string,
  rIcon1: PropTypes.string,
  showRIcon: PropTypes.bool,
  showRIcon1: PropTypes.bool,
  showLIcon: PropTypes.bool,
  showLIcon1: PropTypes.bool,

  /** Style props */
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextAlign: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propTextAlign1: PropTypes.any,
};

export default SecitonHeadlingLevel1;
