import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Like from "./components/Like";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

function App() {
  // let todos = []
  const [todos, setTodos] = useState([]);

  const [editedObj, setEditedObj] = useState(null);
  console.log(todos, "todos");
  console.log(editedObj, "editedObj");

  function getEditedObj(id) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj);
  }

  function addTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function saveChanges(newObj) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setTodos(newTodos);
  }

  function deleteTask(id) {
    let newTodos = [...todos];
    newTodos = newTodos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      {/* <Like /> */}
      <AddTodo addTask={addTask} />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        getEditedObj={getEditedObj}
      />
      {editedObj && (
        <EditTodo saveChanges={saveChanges} editedObj={editedObj} />
      )}
    </div>
  );
}

export default App;
