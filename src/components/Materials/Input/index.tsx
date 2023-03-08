type propsInput = {
  value : string,
  name : string,
  onChange : (e : React.FormEvent) => void
}

const InputField = ({
  value,
  name,
  onChange
}: propsInput) => {
  return (
    <div>
        <label>label</label>
        <input 
          type="text" 
          value={value}
          name={name}
          onChange={onChange}
        />
    </div>
  
  )
}

export default InputField