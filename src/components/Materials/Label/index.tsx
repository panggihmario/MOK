import React from "react"
import style from "../style/materials.module.scss"
const Label : React.FC<  {label : string} >  = function ( props ) {
  return (
    <div className={style['field__label']}> {props.label} </div>
  )
}

export default Label