import { useMemo } from "react";
import PropTypes from "prop-types";

const DividerInline = ({ className = "", propBorderTop }) => {
  const line1Style = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div
      className={`self-stretch h-px flex flex-row items-start justify-start pt-[0.5px] px-0 pb-0 box-border shrink-0 max-w-full ${className}`}
    >
      <div
        className="h-px flex-1 relative border-neutral-n300 border-t-[1px] border-solid box-border max-w-full"
        style={line1Style}
      />
    </div>
  );
};

DividerInline.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderTop: PropTypes.any,
};

export default DividerInline;
