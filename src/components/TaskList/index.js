import React from "react";

import "./styles.css";
import BlankState from "./Components/BlankState";
import TaskCard from "../TaskCard";

function TaskList({ tasks = [] }) {
  const hasTasks = tasks.length !== 0; // when no task present

  return (
    <div className="task__list">
      {hasTasks ? (
        tasks.map((task, index) => {
          return (
            <React.Fragment key={index + task.title}>
              <TaskCard task={task} />
            </React.Fragment>
          );
        })
      ) : (
        <BlankState />
      )}
    </div>
  );
}

export default TaskList;
