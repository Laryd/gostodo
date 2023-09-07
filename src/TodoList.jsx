const TodoList = (props) => {
  const { todoList, handleDelete, toggleTodo } = props;
  return (
    <ul className="list-group mt-2">
      {todoList.length === 0 && "No Todos"}
      {todoList?.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item ${
            todo.completed && "text-decoration-line-through text-danger"
          }`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />{" "}
          {todo.title}
          <button
            onClick={() => handleDelete(todo.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
