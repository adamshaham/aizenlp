import SecitonHeadlingLevel1 from "./SecitonHeadlingLevel1";
import SolutionCard from "./SolutionCard";
import ButtonText from "./ButtonText";
import PropTypes from "prop-types";

const contentData = {
  sectionHeading: {
    headline: "Insights and predictions made easy",
    description: "Advanced business intelligence tools enhance efficiency across your entire operation. By predicting future revenue and dissecting marketing effectiveness, these tools provide you with the critical insights needed for informed decision-making.",
    iconAI: "/iconai-4@2x.png",
    content: "Applications",
    icon: true,
    lIcon: "/l-icon2.svg",
    lIcon1: "/l-icon3.svg",
    buttonText: "Get a demo",
    buttonText1: "Research",
    rIcon: "/r-icon2.svg",
    rIcon1: "/r-icon5.svg",
    showRIcon: false,
    showRIcon1: false,
    showLIcon: false,
    showLIcon1: false,
  },
  solutionCards: [
    {
      iconserverDatabasesSync: "/iconserver-databases-network-1@2x.png",
      solutionTitle: "Predictive Power",
      solutionDescr: "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
      solutionField: "Finance, Retail, E-commerce",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-11@2x.png",
      solutionTitle: "Connect with Ease",
      solutionDescr: "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've got you covered.",
      solutionField: "Tech, Healthcare, Manufacturing",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-12@2x.png",
      solutionTitle: "Visualize Your Success",
      solutionDescr: "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data has never been this easy.",
      solutionField: "Marketing, Sales, Operations",
    },
    {
      iconserverDatabasesSync: "/iconchart-rates-checkmark-1@2x.png",
      solutionTitle: "Stay Updated, Always",
      solutionDescr: "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and stay ahead of the curve.",
      solutionField: "E-commerce, Logistics, Supply Chain",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-13@2x.png",
      solutionTitle: "Your Data's Safe Haven",
      solutionDescr: "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we prioritize your data's safety.",
      solutionField: "Finance, Healthcare, Legal",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-14@2x.png",
      solutionTitle: "Collaborate and Conquer",
      solutionDescr: "Work together seamlessly with Neuros's collaborative features. Share insights, annotate charts, and drive collective growth.",
      solutionField: "Design, Development, Project Management",
    },
    {
      iconserverDatabasesSync: "/iconcredit-card-cursor-click-1.svg",
      solutionTitle: "Simplicity Meets Power",
      solutionDescr: "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
      solutionField: "All Industries",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-15@2x.png",
      solutionTitle: "Let AI Do the Heavy Lifting",
      solutionDescr: "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide your strategies.",
      solutionField: "Retail, Marketing, Sales",
    },
    {
      iconserverDatabasesSync: "/iconserver-databases-network-16@2x.png",
      solutionTitle: "Collaborate and Conquer",
      solutionDescr: "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions that adapt to your growth.",
      solutionField: "Startups, SMEs, Enterprises",
    },
  ],
  buttonText: "Explore more application",
};

const SolutionSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-center justify-start pt-[124.4px] px-5 pb-[108.9px] box-border text-center text-18xl-9 text-[#1c1f25] font-dm-sans lg:pt-[81px] lg:pb-[71px] lg:box-border gap-section-spacing-lg mq750:pt-[53px] mq750:pb-[46px] mq750:box-border ${className}`}
    >
      <div className="w-[1400px] flex flex-col items-center justify-start gap-[58.3px] max-w-[1400px] gap-[29px]">
        <SecitonHeadlingLevel1
          headline={contentData.sectionHeading.headline}
          description={contentData.sectionHeading.description}
          iconAI={contentData.sectionHeading.iconAI}
          content={contentData.sectionHeading.content}
          icon={contentData.sectionHeading.icon}
          lIcon={contentData.sectionHeading.lIcon}
          lIcon1={contentData.sectionHeading.lIcon1}
          buttonText={contentData.sectionHeading.buttonText}
          buttonText1={contentData.sectionHeading.buttonText1}
          rIcon={contentData.sectionHeading.rIcon}
          rIcon1={contentData.sectionHeading.rIcon1}
          showRIcon={contentData.sectionHeading.showRIcon}
          showRIcon1={contentData.sectionHeading.showRIcon1}
          showLIcon={contentData.sectionHeading.showLIcon}
          showLIcon1={contentData.sectionHeading.showLIcon1}
        />
        <div className="w-full flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[0.1px] box-border relative gap-x-inline-3xl1 gap-y-inline-3xl1 max-w-[1170.56px] min-h-[889px] shrink-0 text-left text-lgi-4 lg:max-w-full gap-inline-3xl1">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-x-[31.1px] gap-y-[29.2px] min-h-[811px] max-w-full">
            {contentData.solutionCards.map((card, index) => (
              <SolutionCard
                key={index}
                iconserverDatabasesSync={card.iconserverDatabasesSync}
                solutionTitle={card.solutionTitle}
                solutionDescr={card.solutionDescr}
                solutionField={card.solutionField}
              />
            ))}
          </div>
          <div className="h-[255.7px] w-full !m-[0] absolute right-[0%] bottom-[0.1px] left-[0%] flex flex-col items-center justify-end gap-[7.8px] z-[1]">
            <img
              className="w-full h-full absolute !m-[0] right-[0%] bottom-[0px] left-[0%] max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/gradient-mask.svg"
            />
            <ButtonText
              showRIcon={false}
              showLIcon={false}
              buttonText={contentData.buttonText}
              propAlignSelf="unset"
              propBorderRadius="12px"
              propBorder="1px solid #b6bcce"
              propBackgroundColor="rgba(255, 255, 255, 0.1)"
              propWidth="unset"
              propBackdropFilter="blur(11.67px)"
              propFlex="unset"
              propPadding="15.6px 18px 15.5px"
              propBackground="unset"
              propHeight="42.8px"
              lIcon="/l-icon5.svg"
              propHeight1="17.5px"
              propWidth1="17.5px"
              propMinHeight="unset"
              propAlignSelf1="unset"
              propHeight2="19.4px"
              propFlex1="unset"
              propAlignSelf2="unset"
              propWidth2="unset"
              propMinWidth="unset"
              propColor="#343844"
              propDisplay="unset"
              propHeight3="unset"
              rIcon="/r-icon7.svg"
              propHeight4="17.5px"
              propWidth3="17.5px"
              propMinHeight1="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SolutionSection.propTypes = {
  className: PropTypes.string,
};

export default SolutionSection;
