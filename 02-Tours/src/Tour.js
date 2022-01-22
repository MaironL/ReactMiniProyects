import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, remTour }) => {
  const [more, setMore] = useState(false);

  const viewChange = () => {
    setMore(!more);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>

        <p>
          {more ? info : `${info.substring(0, 170)}...`}
          <button onClick={viewChange}>
            {more ? "view less" : "view more"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => remTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
