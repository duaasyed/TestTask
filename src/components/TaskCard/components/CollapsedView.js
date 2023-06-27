import React from "react";

import "./CollapsedView.css";
import InfoLabel from "../../InfoLabel";
import Button from "../../Button";

function CollapsedView({ isCompleted, createdAt }) {
  const completedText = isCompleted ? "Completed" : "Not Completed";
  return (
    <div className="collapsed">
      <div className="collapsed__container">
        <InfoLabel label="Completed" text={completedText} />
        <br />
        <InfoLabel label="Created At" text={createdAt} />
        <br />
        <Button title="Delete" />
      </div>
    </div>
  );
}

export default CollapsedView;
