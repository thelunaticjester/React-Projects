import { useState } from "react";
import './index.css'

const Todolist = ({todo}) => (
  <ul>
    {todo.map(todo =>(
      <li key = {todo.id}>{todo.text}</li>
    ))}
  </ul>
)
const App = () => {
  const [todos,setTodo] = useState ([
    {id:1,text:"learning react"},
    { id: 2, text: "creating a todo" },
    { id: 3, text: "deploying it too" }
  ])
const [inputValue,setInputValue] = useState("")
const addTodo = ()=>{
  if(inputValue.trim()==="") return;
  const newTodo = {id:todos.length+1,text : "new todo task"};
  setTodo([...todos,newTodo]);
  setInputValue ("")
}
return(
  <>
  <input
  type="text"
  placeholder="Enter new todo"
  value={inputValue}
  onChange={(e)=> setInputValue(e.target.value)}
  />
  <button onClick={addTodo}>Add Todo</button>
  <Todolist todo ={todos}/>
  </>
)
}
export default App;