import React from "react";

import "./styles.css";

function InfoLabel({ label = "", text = "" }) {
  return (
    <div className="info__container">
      <h4>{`${label}:`}</h4>
      <p>&ensp;{text}</p>
    </div>
  );
}

export default InfoLabel;
