import React, { useState } from "react";
import SecitonHeadlingLevel1 from "./SecitonHeadlingLevel1";
import FAQItemStyle from "./FAQItemStyle";
import PropTypes from "prop-types";

const contentData = {
  sectionHeading: {
    headline: "Frequently asked questions",
    description: "Explore our frequently asked questions to learn more about Neuros’s features, security, integration capabilities, and more",
    iconAI: "/iconai-5@2x.png",
    content: "FAQ",
    icon: true,
    lIcon: "/l-icon2.svg",
    lIcon1: "/l-icon3.svg",
    buttonText: "Get a demo",
    buttonText1: "Research",
    rIcon: "/r-icon2.svg",
    rIcon1: "/r-icon5.svg",
    showRIcon: false,
    showRIcon1: true,
    showLIcon: false,
    showLIcon1: true,
  },
  faqItems: [
    {
      title: "What is Neuros and how does it differ from other analytics platforms?",
      answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
      propBorderBottom: "1px solid #b6bcce",
      propHeight: "44.3px",
      propMinWidth: "379px",
      iconchevronDownArrowDown: "/iconchevronup-arrowup.svg",
      propColor: "-[#4b5162]",
    },
    {
      title: "How does the AI-driven predictive analytics feature work?",
      answer: "Neuros's AI-driven predictive analytics utilizes advanced machine learning algorithms to analyze historical data and identify patterns. By doing so, it can anticipate future trends, market shifts, and potential challenges, allowing businesses to make informed decisions proactively.",
      propBorderBottom: "1px solid #eceef4",
      propHeight: "16.3px",
      propMinWidth: "379px",
      iconchevronDownArrowDown: "/iconchevronup-arrowup1.svg",
      propColor: "#4b5162",
    },
    {
      title: "Is my data secure with Neuros?",
      answer: "Absolutely! At Neuros, we prioritize data security. All data processed and stored on our platform is encrypted using industry-standard protocols. Additionally, we have stringent access controls in place to ensure that only authorized personnel can access sensitive information.",
      propBorderBottom: "1px solid #eceef4",
      propHeight: "16.3px",
      propMinWidth: "233px",
      iconchevronDownArrowDown: "/iconchevronup-arrowup1.svg",
      propColor: "#4b5162",
    },
    {
      title: "Can I integrate Neuros with other tools and platforms I currently use?",
      answer: "Yes, Neuros is designed to seamlessly integrate with a wide range of business tools, CRMs, ERPs, and other platforms. Our goal is to provide a unified analytics experience, ensuring you have a holistic view of your operations.",
      propBorderBottom: "1px solid #eceef4",
      propHeight: "44.3px",
      propMinWidth: "379px",
      iconchevronDownArrowDown: "/iconchevronup-arrowup1.svg",
      propColor: "#4b5162",
    },
    {
      title: "How is the pricing structured for Neuros? Are there any hidden fees?",
      answer: `Neuros offers transparent pricing with various plans to cater to different business needs. All our pricing details are listed on the "Pricing" page. There are no hidden fees, and you can choose a plan that best fits your requirements.`,
      propBorderBottom: "1px solid #eceef4",
      propHeight: "44.3px",
      propMinWidth: "379px",
      iconchevronDownArrowDown: "/iconchevronup-arrowup1.svg",
      propColor: "#4b5162",
    },
    {
      title: "I'm new to business analytics. Does Neuros offer any support or tutorials?",
      answer: "Absolutely! We understand that analytics can be overwhelming, especially if you're new to it. Neuros offers a range of tutorials, user guides, and dedicated customer support to assist you at every step. Our aim is to make your Neuros experience as smooth and beneficial as possible.",
      iconchevronDownArrowDown: "/iconchevronup-arrowup1.svg",
      propColor: "#4b5162",
    },
  ],
};

const FAQSection = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`flex-1 bg-[#fff] overflow-hidden flex flex-col items-center justify-start pt-[124.4px] px-5 pb-[108.9px] box-border max-w-full text-left text-lgi-4 text-[#1c1f25] font-dm-sans gap-section-spacing-lg mq450:pt-[53px] mq450:pb-[46px] mq450:box-border mq1050:pt-[81px] mq1050:pb-[71px] mq1050:box-border ${className}`}
    >
      <div className="w-[1440.6px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[0px] box-border gap-x-[46.7px] gap-y-[44.7px] max-w-[1440.56px] shrink-0 lg:max-w-full gap-[22px]">
        <SecitonHeadlingLevel1
          propGap="20.3px"
          propFlex="0.9177"
          propMinWidth="350px"
          headline={contentData.sectionHeading.headline}
          propTextAlign="left"
          propAlignSelf="stretch"
          description={contentData.sectionHeading.description}
          propTextAlign1="left"
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
        <div className="flex-1 flex flex-col items-center justify-start gap-stack-2xl min-w-[350px] max-w-full">
          {contentData.faqItems.map((item, index) => (
            <FAQItemStyle
              key={index}
              title={item.title}
              answer={item.answer}
              propBorderBottom={item.propBorderBottom}
              propHeight={item.propHeight}
              propMinWidth={item.propMinWidth}
              iconchevronDownArrowDown={item.iconchevronDownArrowDown}
              content={openIndex === index}
              onClick={() => toggleFAQ(index)}
              propColor={item.propColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

FAQSection.propTypes = {
  className: PropTypes.string,
};

export default FAQSection;
