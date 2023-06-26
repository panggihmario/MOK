import Label from "../Label/index"
import React, { useState} from "react"
import style from "../../../styles/components/_input.module.scss"

interface propsInput extends React.HTMLProps<HTMLInputElement> {
  name: string;
  className?: string;
  label?: string;
  errorText?: string;
}

const InputField  : React.FC <propsInput> = ({
  label,
  name,
  type = 'text',
  onChange,
  ...rest
}) => {

  const [validationMessage , setValidationMessage] = useState<string>("")

  const onInvalid = (e : React.FormEvent) => {
    const target = e.target as HTMLInputElement
    setValidationMessage(target.validationMessage)
  }

  const onBlur =  (e : React.FormEvent) => {
    const target  = e.target as HTMLInputElement
    if(!!validationMessage) {
      setValidationMessage(target.validationMessage)
    }
  }

  return (
    <div className={style['field__container']}>
      {label &&  <Label label={label} /> }
        <div className={`${style['field__input']} ${validationMessage  && style['field__error'] }`}>
          <input 
            {...rest}
            type={type} 
            name={name}
            onChange={onInvalid}
            onBlur={onBlur}
            onInvalid={onInvalid}
          />
        </div>
      <div 
        className={`${style['field__error-message']}
          ${validationMessage && style['message-active']}
        `}
      >
        {validationMessage}
      </div>
    </div>
  )
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField