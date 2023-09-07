import React from "react";

const Form = (props) => {
  const {handleOnsubmit, setNewTodo, newTodo} = props
  return (
    <form
      onSubmit={handleOnsubmit}
      className="container mt-2 d-flex flex-column justify-content-between gap-3"
    >
      <label htmlFor="New Item" className="p-2 text-success display-4">
        <strong>My Todo List</strong>
      </label>
      <input
        type="text"
        value={newTodo}
        className="form-control"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default Form;
