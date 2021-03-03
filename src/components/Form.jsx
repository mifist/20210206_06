import {useState} from "react"
import {WrapForm} from "./styles/app"

const initState = {email: "", password: ""}

const Form = () => {
  const [data, setData] = useState(initState)

  const handleChange = ({target}) => {
    setData(x => ({...x, [target.name]: target.value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <WrapForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" value={data.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" value={data.password} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </WrapForm>
  )
}

export default Form
