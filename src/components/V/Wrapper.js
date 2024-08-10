import { useMemo } from "react";
import ButtonTextLink from "./ButtonTextLink";
import PropTypes from "prop-types";

const Wrapper = ({
  className = "",
  propFlex,
  titleText,
  propMinWidth,
  propDisplay,
  propAlignSelf,
  lIcon1,
  lIcon11,
  lIcon12,
  lIcon13,
  text,
  text1,
  text2,
  text3,
  rIcon1,
  rIcon11,
  rIcon12,
  rIcon13,
  rIcon,
  rIcon2,
  rIcon3,
  rIcon4,
  lIcon,
  lIcon2,
  lIcon3,
  lIcon4,
}) => {
  const wrapperStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const titleTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const listStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`flex-[0.9863] flex flex-col items-start justify-center py-0 pl-0 pr-[125px] box-border gap-stack-[11.6px] min-w-[155px] text-left text-[15.6px] text-[#343844] font-dm-sans mq450:pr-5 mq450:box-border ${className}`}
      style={wrapperStyle}
    >
      <div className="flex flex-row items-center justify-center">
        <b
          className="relative leading-[120%] inline-block min-w-[106px]"
          style={titleTextStyle}
        >
          {titleText}
        </b>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-center gap-stack-[14px]"
        style={listStyle}
      >
        <ButtonTextLink
          rIcon={rIcon}
          text={text}
          lIcon={lIcon}
          lIcon1={lIcon1}
          propDisplay="unset"
          propMinWidth="unset"
          rIcon1={rIcon1}
        />
        <ButtonTextLink
          rIcon={rIcon2}
          text={text1}
          lIcon={lIcon2}
          lIcon1={lIcon11}
          propDisplay="inline-block"
          propMinWidth="58px"
          rIcon1={rIcon11}
        />
        <ButtonTextLink
          rIcon={rIcon3}
          text={text2}
          lIcon={lIcon3}
          lIcon1={lIcon12}
          propDisplay="inline-block"
          propMinWidth="105px"
          rIcon1={rIcon12}
        />
        <ButtonTextLink
          rIcon={rIcon4}
          text={text3}
          lIcon={lIcon4}
          lIcon1={lIcon13}
          propDisplay="inline-block"
          propMinWidth="92px"
          rIcon1={rIcon13}
        />
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
  titleText: PropTypes.string,
  lIcon1: PropTypes.string,
  lIcon11: PropTypes.string,
  lIcon12: PropTypes.string,
  lIcon13: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rIcon1: PropTypes.string,
  rIcon11: PropTypes.string,
  rIcon12: PropTypes.string,
  rIcon13: PropTypes.string,
  rIcon: PropTypes.bool,
  rIcon2: PropTypes.bool,
  rIcon3: PropTypes.bool,
  rIcon4: PropTypes.bool,
  lIcon: PropTypes.bool,
  lIcon2: PropTypes.bool,
  lIcon3: PropTypes.bool,
  lIcon4: PropTypes.bool,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Wrapper;
