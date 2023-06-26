import React from "react"
import style from "../../../styles/components/_btn.module.scss"

type propsButton = {
  label : string,
  color? : string,
  size? : string,
  className? : string,
  type? : 'button' | 'submit' | 'reset'
}

const Button : React.FC<propsButton> = ({
  label,
  color = "default" ,
  size = "md",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${style.btn} ${style[`btn__${size}`]} ${style[`btn__${color}`]} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button