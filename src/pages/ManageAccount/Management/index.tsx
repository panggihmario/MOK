import { InputField } from "../../../components/Materials/index"
import { useState } from "react"
const Management = () => {

  const [inputValue, setInputValue] = useState({username : ''})
  const { username } = inputValue;


  const handleChange = (e : React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement ;
    setInputValue((prev) => ({
      ...prev,
      [name] : value,
    }));
    console.log(inputValue);
  };

  return (
    <div>
      Management {username}
      <div>
        <InputField
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}

export default Management