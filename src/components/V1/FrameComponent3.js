import React, { useState } from 'react';
import QuestionItems from './QuestionItems';
import PropTypes from 'prop-types';

const contentData = {
  titlePart1: "Frequently Asked ",
  titlePart2: "Questions",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.",
  questions: [
    {
      question: "Do you specialize in both residential and commercial landscaping?",
      answer: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
    },
    {
      question: "Do you provide sustainable and eco-friendly landscaping options?",
      answer: "Yes, we offer a variety of sustainable and eco-friendly landscaping options to help you create a beautiful and environmentally friendly outdoor space.",
    },
    {
      question: "How do I request a consultation or estimate for my landscaping project?",
      answer: "You can request a consultation or estimate by contacting us through our website or giving us a call. We will be happy to discuss your project and provide a detailed estimate.",
    },
    {
      question: "What factors influence the cost of a landscaping project?",
      answer: "Several factors influence the cost of a landscaping project, including the size and scope of the project, the materials used, and the complexity of the design. We provide detailed estimates to help you understand the costs involved.",
    },
    {
      question: "How often should I schedule landscape maintenance services?",
      answer: "The frequency of landscape maintenance services depends on your specific needs and preferences. We offer customized maintenance plans to ensure your outdoor space remains beautiful and well-maintained throughout the year.",
    },
  ]
};

const FrameComponent3 = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[82.4px] box-border max-w-full text-center text-46xl-1 text-[#232a42] font-montserrat lg:pb-[54px] lg:box-border mq750:pb-[35px] mq750:box-border ${className}`}
    >
      <div className="w-[1440.4px] flex flex-col items-start justify-start gap-[77.5px] max-w-full gap-[19px] gap-[39px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[949.9px] flex flex-col items-start justify-start gap-[23.3px] max-w-full">
            <div className="self-stretch relative leading-[70px] font-semibold mq1050:text-33xl mq1050:leading-[56px] mq450:text-20xl mq450:leading-[42px]">
              <span>{contentData.titlePart1}</span>
              <span className="text-[#2da884]">{contentData.titlePart2}</span>
            </div>
            <div className="self-stretch relative text-base-6 leading-[23.33px] font-medium font-plus-jakarta-sans text-[#525252]">
              {contentData.description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[38.8px] max-w-full text-left text-8xl-2 text-[#fff]">
          {contentData.questions.map((item, index) => (
            <QuestionItems
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
              propHeight="32px"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
