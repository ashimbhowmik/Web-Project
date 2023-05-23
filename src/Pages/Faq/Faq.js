import React, { useState } from "react";
import "../Faq/Faq.css";
import faq from "../../assets/images/FAQ.svg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when the data changes.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React by using npm (Node Package Manager) or yarn. Run the command `npm install react` or `yarn add react` in your project directory.",
    },
  ];

  return (
    <div className="cont1">
      <div className="faq-container">
        <div className="cont34">
          <div className="cont-img">
            <img src={faq} alt="" />
          </div>
          <div className="cont-div">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="faq-question">{faq.question}</div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
