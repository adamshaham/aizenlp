import CustomerCards from "./CustomerCards";
import PropTypes from "prop-types";

const Customer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[107.6px] pl-5 pr-[21px] box-border max-w-full shrink-0 text-center text-19xl-5 text-black1 font-body-base-regular mq800:pb-[70px] mq800:box-border ${className}`}
    >
      <div className="w-[998.4px] flex flex-col items-end justify-start gap-[52.5px] max-w-full gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full">
          <div className="w-[480.4px] relative leading-[130%] font-semibold inline-block shrink-0 max-w-full mq450:text-4xl mq450:leading-[30px] mq800:text-12xl mq800:leading-[40px]">
            We Provides best Feature for customar
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[25.9px] grid-cols-[repeat(4,_minmax(174px,_1fr))] text-2xl-9 mq450:grid-cols-[minmax(174px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(174px,_301px))]">
          <div className="h-[367.5px] flex flex-col items-start justify-start">
            <div className="self-stretch rounded-[8.75px] bg-[#fff] flex flex-col items-start justify-start pt-[35px] px-[49px] pb-[121.9px] gap-[43.7px] z-[1] mq450:pt-[23px] mq450:pb-[79px] mq450:box-border">
              <div className="w-[230.1px] h-[364.9px] relative rounded-[8.75px] bg-[#fff] hidden" />
              <img
                className="w-[131.3px] h-[131.3px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/group-411.svg"
              />
              <div className="self-stretch h-[33px] flex flex-row items-start justify-start py-0 pl-[65px] pr-[66px] box-border">
                <div className="self-stretch flex-1 relative leading-[150%] font-medium z-[2] mq450:text-lg mq450:leading-[26px]">{` `}</div>
              </div>
            </div>
            <div className="self-stretch flex-1 shadow-[0px_1.8px_35px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] [background:linear-gradient(180deg,_rgba(90,_31,_175,_0),_#591eae),_#fff] flex flex-row items-start justify-start pt-[182px] px-0 pb-0 mt-[-362.3px] text-[#fff]">
              <div className="h-[364.9px] w-[231.9px] relative shadow-[0px_1.8px_35px_4.38px_rgba(6,_14,_26,_0.05)] rounded-[8.75px] [background:linear-gradient(180deg,_rgba(90,_31,_175,_0),_#591eae),_#fff] hidden" />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[25.4px] px-[22px] pb-[25px] relative gap-[9px]">
                <div className="self-stretch relative leading-[33px] font-medium z-[4] mq450:text-lg mq450:leading-[26px]">
                  Clean Code
                </div>
                <div className="self-stretch relative text-smi-3 leading-[160%] z-[4]">
                  Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.
                </div>
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                    alt=""
                    src="/rectangle-61.svg"
                  />
                  <img
                    className="absolute top-[123.4px] left-[102.4px] w-[26.2px] h-[26.3px] object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="/group-9@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <CustomerCards
            group412="/group-412.svg"
            dataAnalytic="Data Analytic"
            group10="/group-10@2x.png"
          />
          <CustomerCards
            group412="/group-413.svg"
            dataAnalytic="Fully Secured"
            propWidth="unset"
            propDisplay="unset"
            group10="/group-11@2x.png"
          />
          <CustomerCards
            group412="/group-414.svg"
            dataAnalytic="24/7 Support"
            propWidth="139px"
            propDisplay="inline-block"
            group10="/group-12@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Customer.propTypes = {
  className: PropTypes.string,
};

export default Customer;
