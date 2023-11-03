import React from "react";

const TodoList = ({ todos, deleteTask, getEditedObj, changeStatus }) => {
  return (
    <div>
      <h2>Todo List:</h2>
      <ul>
        {todos.map((task) => (
          <li className="flex" key={task.id}>
            <h5 className={task.status === true ? "done" : ""}>{task.task}</h5>
            <input onChange={() => changeStatus(task.id)} type="checkbox" />
            <button onClick={() => getEditedObj(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
