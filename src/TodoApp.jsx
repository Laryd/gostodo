import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

const TodoApp = (props) => {
    const {setNewTodo, setTodoList, todoList, newTodo} = props
     const handleOnsubmit = (e) => {
       e.preventDefault();
       setTodoList((curr) => {
         return [
           ...curr,
           { title: newTodo, id: crypto.randomUUID(), completed: false },
         ];
       });
       setNewTodo("");
     };
     const toggleTodo = (id, completed) => {
       setTodoList((curr) => {
         return curr.map((todo) => {
           if (todo.id === id) {
             return { ...todo, completed };
           }
           return todo;
         });
       });
     };
     const handleDelete = (id) => {
       setTodoList((curr) => {
         return curr.filter((todo) => todo.id !== id);
       });
     };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="">GossipertTodos</h1>
      <Form
        setNewTodo={setNewTodo}
        handleOnsubmit={handleOnsubmit}
        newTodo={newTodo}
      />
      <TodoList
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
        todoList={todoList}
      />
    </div>
  );
}

export default TodoApp