import PropTypes from "prop-types";

const contentData = {
  headline: ["OpenType features", "and Variable fonts"],
};

const SecondHeadline = ({ className = "" }) => {
  return (
    <div
      className={`w-[596.7px] overflow-hidden flex flex-row items-center justify-start py-0 px-2 box-border max-w-[125%] shrink-0 text-left text-[52px] text-[#fff] font-body-base-regular ${className}`}
    >
      <h1 className="m-0 flex-1 relative text-inherit tracking-[0.2px] leading-[62px] font-normal font-[inherit] inline-block max-w-full mq450:text-[31px] mq450:leading-[37px] mq1000:text-[42px] mq1000:leading-[50px]">
        {contentData.headline.map((line, index) => (
          <p key={index} className="m-0">
            {line}
          </p>
        ))}
      </h1>
    </div>
  );
};

SecondHeadline.propTypes = {
  className: PropTypes.string,
};

export default SecondHeadline;
