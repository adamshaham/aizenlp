import PropTypes from "prop-types";

const SolutionCard = ({
  className = "",
  iconserverDatabasesSync,
  solutionTitle,
  solutionDescr,
  solutionField,
}) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-neutral-n0 border-neutral-n400 border-[1px] border-solid box-border flex flex-col items-start justify-center p-[30px] gap-stack-lg1 min-w-[283px] max-w-full text-left text-lgi-4 text-neutral-1000 font-dm-sans ${className}`}
    >
      <div className="flex flex-row items-start justify-start">
        <img
          className="h-[31.1px] w-[31.1px] relative object-cover"
          loading="lazy"
          alt=""
          src={iconserverDatabasesSync}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[3.9px]">
        <b className="self-stretch relative leading-[142%]">{solutionTitle}</b>
        <div className="self-stretch relative text-base-6 leading-[160%] font-body-base-regular text-dimgray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {solutionDescr}
        </div>
      </div>
      <div className="self-stretch relative text-sm-6 leading-[140%] font-body-base-regular text-primary-pr600 overflow-hidden text-ellipsis whitespace-nowrap">
        {solutionField}
      </div>
    </div>
  );
};

SolutionCard.propTypes = {
  className: PropTypes.string,
  iconserverDatabasesSync: PropTypes.string,
  solutionTitle: PropTypes.string,
  solutionDescr: PropTypes.string,
  solutionField: PropTypes.string,
};

export default SolutionCard;
