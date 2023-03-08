import React from "react";
import "./todo.css"

const TodoItem  : React.FC <{text : string ; onRemoveTodo : () => void }> = (props) => {
  return (
    <li className="text-todo"  onClick={props.onRemoveTodo} > {props.text} </li>
  )
}

export default TodoItem

