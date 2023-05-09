import Label from "../Label/index"
import React from "react"
import style from "../../../styles/components/_input.module.scss"
type propsInput = {
  value : string,
  name : string,
  onChange : (e : React.FormEvent) => void,
  label? : string,
  type? : string
}

const InputField  : React.FC <propsInput> = ({
  label,
  value,
  name,
  type = 'text',
  onChange,
}) => {
  return (
    <div className={style['field__container']}>
        {label &&  <Label label={label} /> }
        <div className={style['field__input']}>
          <input 
            required
            type={type} 
            value={value}
            name={name}
            onChange={onChange}
          />
        </div>
    </div>
  )
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField