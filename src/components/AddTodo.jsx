import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [task, setTask] = useState("");

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
  }

  return (
    <div>
      <h2>Add Todo Component</h2>
      <form onSubmit={createTodo}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default AddTodo;
