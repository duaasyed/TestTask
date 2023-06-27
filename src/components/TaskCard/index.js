import React, { useState } from "react";

import "./styles.css";
import { CheckCircleIcon, DotIcon } from "../../assets";
import CollpasedView from "./components/CollapsedView";

function TaskCard({ task = {} }) {
  const { title = "", is_completed = false, createdAt = "" } = task;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsedView = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="task__card">
      <div className="task__card__content">
        <div className="task__card__text__content">
          <span className="checkmark__icon">
            <CheckCircleIcon />
          </span>
          <h3>{title}</h3>
        </div>
        <DotIcon onClick={toggleCollapsedView} />
      </div>

      {/* Collapsed View */}
      {!isCollapsed && (
        <CollpasedView isCompleted={is_completed} createdAt={createdAt} />
      )}
    </div>
  );
}

export default TaskCard;
