import ButtonText from "./ButtonText";
import TrialBenefitItem from "./TrialBenefitItem";
import PropTypes from "prop-types";

const contentData = {
  mainHeadline: "Experience the Future of Business Analytics with Neuros",
  buttonText: "Start your free trial",
  trialBenefits: [
    {
      icon: "/iconcredit-card-cursor-click.svg",
      courseName: "Instant Access",
      benefitDescriptions: "Begin exploring Neuros's full suite of features immediately",
    },
    {
      icon: "/iconchart-rates-checkmark@2x.png",
      courseName: "No Commitments",
      benefitDescriptions: "No credit card required, and you can cancel anytime",
    },
    {
      icon: "/iconworld-transaction-transfer.svg",
      courseName: "Dedicated Support",
      benefitDescriptions: "Our team is here to assist you every step of the way during your trial.",
    },
  ],
};

const TrialBanner = ({ className = "" }) => {
  return (
    <div
      className={`pb-[100px] self-stretch bg-[#fff] overflow-hidden flex flex-row items-start justify-center py-[7.8px] px-5 box-border shrink-0 max-w-full z-[3] text-left text-27xl-7 text-[#fff] font-dm-sans gap-section-spacing-lg mq750:pb-[51px] mq750:box-border ${className}`}
    >
      <div className="h-[415.2px] w-[1440.6px] rounded-13xl bg-[#387ff5] overflow-hidden shrink-0 flex flex-col items-start justify-start py-inset-6xl px-[58px] box-border relative gap-[7.8px] max-w-[1440.6px] lg:max-w-full mq450:h-auto mq450:min-h-[415.2px]">
        <img
          className="w-[854.6px] h-[calc(100%_-_3px)] absolute !m-[0] top-[3px] bottom-[0px] left-[0px] max-h-full overflow-hidden object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="w-[1320.9px] !m-[0] absolute top-[58.3px] left-[58.4px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[3px] box-border gap-x-[38.9px] gap-y-[36.9px] max-w-full z-[1]">
          <div className="flex-1 flex flex-col items-start justify-start gap-stack-4xl min-w-[350px] max-w-full">
            <b className="self-stretch relative leading-[116%] mq450:text-9xl mq450:leading-[33px] mq1050:text-18xl mq1050:leading-[43px]">
              {contentData.mainHeadline}
            </b>
            <ButtonText
              showRIcon
              showLIcon={false}
              buttonText={contentData.buttonText}
              propAlignSelf="unset"
              propBorderRadius="12px"
              propBorder="none"
              propBackgroundColor="transparent"
              propWidth="unset"
              propBackdropFilter="unset"
              propFlex="unset"
              propPadding="15.6px 31px 15.5px"
              propBackground="linear-gradient(92.69deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.25))"
              propHeight="unset"
              lIcon="/l-icon4.svg"
              propHeight1="23.3px"
              propWidth1="23.3px"
              propMinHeight="23px"
              propAlignSelf1="unset"
              propHeight2="unset"
              propFlex1="unset"
              propAlignSelf2="unset"
              propWidth2="unset"
              propMinWidth="unset"
              propColor="#fff"
              propDisplay="unset"
              propHeight3="unset"
              rIcon="/r-icon6@2x.png"
              propHeight4="23.3px"
              propWidth3="23.3px"
              propMinHeight1="23px"
            />
          </div>
          <div className="w-[370px] flex flex-col items-start justify-start gap-stack-xl min-w-[350px] max-w-full text-base-6 font-body-base-regular">
            {contentData.trialBenefits.map((benefit, index) => (
              <TrialBenefitItem
                key={index}
                iconcreditCardCursorClick={benefit.icon}
                courseName={benefit.courseName}
                benefitDescriptions={benefit.benefitDescriptions}
              />
            ))}
          </div>
        </div>
        <div className="w-[1170.6px] h-[415.2px] relative bg-[#4452fe]alpha-pra10 hidden mix-blend-color-burn max-w-full z-[2]" />
      </div>
    </div>
  );
};

TrialBanner.propTypes = {
  className: PropTypes.string,
};

export default TrialBanner;
