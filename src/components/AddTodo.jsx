import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function createTodo(e) {
    e.preventDefault();
    if (!task) {
      alert("Empty");
      return;
    }

    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };

    addTask(newTask);

    setTask("");
    setIsModalOpen(false);
  }

  return (
    <div>
      <button className="addTodoBtn" onClick={() => setIsModalOpen(true)}>
        Add Todo
      </button>
      {isModalOpen && (
        <div className="addTodoModal">
          <div className="addTodoModal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2 className="addTaskForm-title">Add Task</h2>
            <form className="addtaskForm" onSubmit={createTodo}>
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="enter new task"
                type="text"
                id="addTaskInp"
              />{" "}
              <br />
              <button className="addTaskFormBtn" type="submit">
                Done
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
