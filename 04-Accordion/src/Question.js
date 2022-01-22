import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [view, setView] = useState(false);

  const viewChange = () => {
    setView(!view);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={viewChange}>
          {view ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {view && <p>{info}</p>}
    </article>
  );
};

export default Question;
