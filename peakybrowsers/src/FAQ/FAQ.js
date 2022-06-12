import "./FAQ.css";
import React, { useState, useRef} from "react";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does it work?",
      answer:
        "Acclimate is an app that connects Ukrainian people who need help (Helpees) with people who can help (Helpers).",
    },
    {
      question: "What kind of help can I ask for?",
      answer:
        "Anything from making phonecalls and booking appointments to filling out government forms or documents. Our moderators check the task for appropriate content, but our helpers are here to help you with anything you need to settle in the UK.",
    },
    {
      question: "Who can be a helper?",
      answer:
        "Anyone who can help with the task. Sometimes proficiency in Ukrainian and English is required, but the tasks vary. We ask you to offer help only if you can truly do it.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Qui optio dicta ex quas nihil quo dolor iure est maiores aliquid! Et molestiae porro sed voluptas sunt sed voluptatibus deleniti ea voluptates corrupti in eius nisi facilis dolorem. Qui eaque voluptas et reprehenderit culpa est ullam sunt qui exercitationem repellat?",
    },
    {
      question: "Et doloribus quaerat in maxime dignissimos e",
      answer:
        "Anyone who can help with the task. Sometimes proficiency in Ukrainian and English is required, but the tasks vary. We ask you to offer help only if you can truly do it.",
    },
    {
      question: "internos qui molestiae ill",
      answer:
        "Anyone who can help with the task. Sometimes proficiency in Ukrainian and English is required, but the tasks vary. We ask you to offer help only if you can truly do it.",
    },
  ];

  const Accordion = () => {
    return (
      <div className="faq-box">
        <ul className="accordion">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </ul>
      </div>
    );
  };

  const AccordionItem = ({ faq }) => {
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const { question, answer } = faq;

    const handleToggle = () => {
      setClicked((prev) => !prev);
    };

    return (
      <li className={`accordion_item ${clicked ? "active" : ""}`}>
        <button className="button" onClick={handleToggle}>
          {question}
          <span className="control">{clicked ? "—" : "+"} </span>
        </button>
        <div
          ref={contentEl}
          className="answer_wrapper"
          style={
            clicked
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="answer">{answer}</div>
        </div>
      </li>
    );
  };

  return (
    <div className="FAQ">
      <h1> Frequently Asked Questions</h1>
      <Accordion />
    </div>
  );
};
