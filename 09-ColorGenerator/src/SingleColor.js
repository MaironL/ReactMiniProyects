import React, { useState, useEffect } from "react";
//import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexC }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  //const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexC}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexC}</p>
      {alert && <p className="alert">copie to clipboard</p>}
    </article>
  );
};

export default SingleColor;
