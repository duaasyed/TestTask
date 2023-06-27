import React from "react";

import "./styles.css";
import PlusButton from "./components/PlusButton";

function TaskInput({ placeholder, onAddButtonPress }) {
  return (
    <div className="task_input">
      <div className="task__input__content">
        <input type="text" className="input_field" placeholder={placeholder} />
        <PlusButton onClick={onAddButtonPress} />
      </div>
    </div>
  );
}

export default TaskInput;
