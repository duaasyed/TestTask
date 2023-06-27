import "./App.css";

import { Avatar, TaskInput, TaskList, TodoHintCard } from "./components";
import { TASKS } from "./utils";

function App() {
  return (
    <div className="app">
      <div className="blur">
        <div className="container">
          <Avatar />

          <div className="task_container">
            <TaskInput placeholder="Add New Task" />
          </div>
          <div className="task_container">
            <TodoHintCard />
          </div>

          <div className="task_container">
            <TaskList tasks={TASKS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
