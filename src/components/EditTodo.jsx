import React, { useState } from "react";

const EditTodo = ({ editedObj, saveChanges }) => {
  const [editedTodo, setEditedTodo] = useState(editedObj);

  console.log(editedTodo, "editedTodo");
  function editTodo(e) {
    setEditedTodo({
      ...editedTodo,
      task: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();
    saveChanges(editedTodo);
  }

  return (
    <div>
      <h2>Edit todo component</h2>
      <form onSubmit={handleSave}>
        <input value={editedTodo.task} onChange={editTodo} type="text" />
        <button>Save changes</button>
      </form>
    </div>
  );
};

export default EditTodo;
