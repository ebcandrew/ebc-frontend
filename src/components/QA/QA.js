import React from "react";
import Heading from "../text/Heading";
import "./QA.css";

function QA() {
  const questions = [
    {
      title: "WHAT IS IN IT FOR THE PLAYERS?",
      desc: "Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque dapibus blandit metus.",
    },

    {
      title: "how do i sign up?",
      desc: "Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque dapibus blandit metus.",
    },

    {
      title: "what are your services?",
      desc: "Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque dapibus blandit metus.",
    },

    {
      title: "how is your model suitable",
      desc: "Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque dapibus blandit metus.",
    },
  ];
  return (
    <div className="qa">
      <div className="qa__heading">
        <Heading text={"questions & answers"} />
      </div>

      <div className="qa__list">
        {questions.map((question, index) => {
          return (
            <div className="qa__list__item" key={index}>
              <div className="title">{question.title}</div>

              <div className="desc">{question.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QA;
