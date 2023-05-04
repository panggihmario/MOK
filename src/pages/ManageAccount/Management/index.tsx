import { InputField } from "../../../components/Materials/index"
import { useState } from "react"
const Management = () => {

  const [inputValue, setInputValue] = useState({ 
    username : '', 
    password : ''
  })
  const { username, password } = inputValue;

  const handleChange = (e : React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement ;
    setInputValue((prev) => ({
      ...prev,
      [name] : value,
    }));
  };

  return (
    <div>
      <div style={{width : '300px'}}>
        <InputField
          name="username"
          label="Username"
          value={username}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div style={{width : '300px'}}>
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

export default Management