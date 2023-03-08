import React, { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-context"

// const NewTodo:React.FC<{onAddTodo : (text : string) => void }> = (props) => {
//   const todoInputRef = useRef<HTMLInputElement>(null)
//   const submitHandler = (event : React.FormEvent) => {
//     event.preventDefault()
//     const enteredText = todoInputRef.current!.value
//     if(enteredText.trim().length === 0) {
//       return
//     }
//     props.onAddTodo(enteredText)
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <label htmlFor="text">Text</label>
//       <input type="text" ref={todoInputRef} />
//       <button type="submit" >Submit</button>
//     </form>
//   )
// }


const NewTodo:React.FC= () => {
  const todoCtx = useContext(TodosContext)
  const todoInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event : React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoInputRef.current!.value
    if(enteredText.trim().length === 0) {
      return
    }
    todoCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Text</label>
      <input type="text" ref={todoInputRef} />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default NewTodo