import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const Incremente = () => {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const Decremente = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };

  const Random = () => {
    let number = Math.floor(Math.random() * people.length);
    if (number === index) {
      if (index === 0) {
        setIndex(index + 1);
      } else if (index === people.length - 1) {
        setIndex(index - 1);
      } else {
        setIndex(index + 1);
      }
    } else {
      setIndex(number);
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={Decremente}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={Incremente}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={Random}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
