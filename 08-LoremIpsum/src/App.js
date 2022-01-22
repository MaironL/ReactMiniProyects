import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = data.slice(0, parseInt(count));
    setText(newData);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsun?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amout">paragraphs</label>
        <input
          type="number"
          name="amout"
          id="amout"
          min="0"
          max={data.length - 1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
