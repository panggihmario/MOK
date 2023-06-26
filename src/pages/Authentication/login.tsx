import { useState } from "react"
import { InputField, KipasButton } from "../../components/Materials/index"
import "../../styles/pages/login.scss"
import * as yup from 'yup';
const Login = () => {
  const [inputValue, setInputValue] = useState({
    username : '',
    password : '',
  })
  const { username, password } = inputValue
  const handleChange = (e : React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement ;
    setInputValue((prev) => ({
      ...prev,
      [name] : value,
    }));

  }
  const handleSubmit = function (e : React.FormEvent) {
    e.preventDefault()
    const formElement = e.target as HTMLFormElement
    const dataObject = new FormData(formElement)
    
    const isValid = formElement.checkValidity()
    formElement.classList.add('submitted')
    const firstInvalidField = formElement.querySelector(
      ":invalid"
    ) as HTMLInputElement;

    firstInvalidField?.focus();
    if(isValid) {
      const data = Object.fromEntries(dataObject.entries())
      console.log(data)
    }
    
  }
  return (
    <div className="flex items-center h-screen justify-center">
        <div className="form__container grid gap-sm" >
          <form
            noValidate 
            onSubmit={handleSubmit}>
            <InputField
              name="username"
              label="Username"
              required
            />
            <InputField
              name="password"
              type="password"
              label="Password"
              required
            />
            <KipasButton
              label="Login"
              color="secondary"
              type="submit"
            />
          </form>
         
      </div>
    </div>
  )
}

export default Login