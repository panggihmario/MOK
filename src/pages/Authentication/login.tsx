import { useState } from "react"
import { InputField } from "../../components/Materials/index"
import "../../styles/pages/login.scss"
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
  };
  return (
    <div className="flex items-center h-screen justify-center">
        <div className="form__container grid gap-sm" >
          <InputField
            name="username"
            label="Username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
      </div>
    </div>
  )
}

export default Login