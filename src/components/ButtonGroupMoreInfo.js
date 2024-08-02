import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const ButtonGroupMoreInfo = ({
  className = "",
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
  return (
    <div
      className={`w-[278.6px] flex flex-row items-start justify-start gap-[11.7px] ${className}`}
    >
      <ButtonText
        showRIcon={showRIcon}
        showLIcon={showLIcon}
        buttonText={buttonText}
        propAlignSelf="unset"
        propBorderRadius="12px"
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
        propWidth2="unset"
        propMinWidth="89px"
        propColor="#fff"
        propDisplay="inline-block"
        propHeight3="unset"
        rIcon={rIcon}
        propHeight4="23.3px"
        propWidth3="23.3px"
        propMinHeight1="23px"
      />
      <ButtonText
        showRIcon={showRIcon1}
        showLIcon={showLIcon1}
        buttonText={buttonText1}
        propAlignSelf="unset"
        propBorderRadius="12px"
        propBorder="1px solid #b6d1fb"
        propBackgroundColor="#fff"
        propWidth="124.4px"
        propBackdropFilter="blur(11.67px)"
        propFlex="unset"
        propPadding="10px 18px"
        propBackground="unset"
        propHeight="unset"
        lIcon={lIcon1}
        propHeight1="23.3px"
        propWidth1="23.3px"
        propMinHeight="23px"
        propAlignSelf1="unset"
        propHeight2="unset"
        propFlex1="1"
        propAlignSelf2="unset"
        propWidth2="unset"
        propMinWidth="71px"
        propColor="#4b5162"
        propDisplay="inline-block"
        propHeight3="unset"
        rIcon={rIcon1}
        propHeight4="23.3px"
        propWidth3="23.3px"
        propMinHeight1="23px"
      />
    </div>
  );
};

ButtonGroupMoreInfo.propTypes = {
  className: PropTypes.string,
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
};

export default ButtonGroupMoreInfo;
