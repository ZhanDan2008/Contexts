import React from "react";

const TodoList = (props) => {
  console.log(props.todos, "props");
  return (
    <div>
      <h2>Todo List:</h2>
      <ul>
        {props.todos.map((task) => (
          <li className="flex" key={task.id}>
            <h5>{task.task}</h5>
            <input type="checkbox" />
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
