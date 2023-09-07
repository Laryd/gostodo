import { useState, useEffect } from 'react'
import './App.css'
import TodoApp from './TodoApp'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null ) return []
    return JSON.parse(localValue)
  })
  
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList])
  
 
  return (
    <>
     <TodoApp setTodoList={setTodoList} newTodo={newTodo} todoList={todoList} setNewTodo={setNewTodo}/>
     
    </>
  );
}

export default App
