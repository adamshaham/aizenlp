import { useMemo } from "react";
import PropTypes from "prop-types";

const FunctionCard = ({
  className = "",
  propBoxShadow,
  propBorder,
  iconserverDatabasesDataBr,
  featureHeadline,
  propMinWidth,
  descriptionContentExperie,
}) => {
  const functionCard1Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      border: propBorder,
    };
  }, [propBoxShadow, propBorder]);

  const featureHeadlineStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-xl bg-neutral-n0 flex flex-col items-start justify-center pt-[15.5px] px-[19px] pb-[15.6px] box-border gap-stack-sm1 min-w-[350px] max-w-full text-left text-base-6 text-neutral-1000 font-body-base-regular ${className}`}
      style={functionCard1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[11.7px] mq450:flex-wrap">
        <div className="flex flex-row items-start justify-start">
          <img
            className="h-[23.3px] w-[23.3px] relative object-cover"
            loading="lazy"
            alt=""
            src={iconserverDatabasesDataBr}
          />
        </div>
        <div
          className="flex-1 relative leading-[25px] font-semibold inline-block min-w-[92px]"
          style={featureHeadlineStyle}
        >
          {featureHeadline}
        </div>
      </div>
      <div className="self-stretch relative leading-[160%] text-dimgray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
        {descriptionContentExperie}
      </div>
    </div>
  );
};

FunctionCard.propTypes = {
  className: PropTypes.string,
  iconserverDatabasesDataBr: PropTypes.string,
  featureHeadline: PropTypes.string,
  descriptionContentExperie: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBorder: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FunctionCard;
