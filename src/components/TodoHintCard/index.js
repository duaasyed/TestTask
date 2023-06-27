import React from "react";

import "./styles.css";
import { ChevronIcon, ListIcon } from "../../assets";

function TodoHintCard() {
  return (
    <div className="task_hint">
      <div className="task_hint__container">
        <div className="container__content">
          <ListIcon className="list_icon" />
          <h3 style={{ color: "white" }}>Your todos</h3>
        </div>
        <ChevronIcon />
      </div>
    </div>
  );
}

export default TodoHintCard;
