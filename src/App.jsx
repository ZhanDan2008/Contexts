import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Like from "./components/Like";
import TodoList from "./components/TodoList";

function App() {
  // let todos = []
  const [todos, setTodos] = useState([]);
  console.log(todos, "todos");

  function addTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      {/* <Like /> */}
      <AddTodo addTask={addTask} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
