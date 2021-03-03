import {useState} from "react"
import {
  WrapForm,
  FormGroup,
  Input,
  Label,
  ButtonGroup,
  Button,
  Spinner,
  FullSpinner,
} from "./styles/app"

const initState = {email: "", password: ""}

const Form = () => {
  const [data, setData] = useState(initState)
  const [loading, setLoading] = useState(false)

  const handleChange = ({target}) => {
    setData(x => ({...x, [target.name]: target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(() => resolve(), 3000))
    setLoading(false)
    console.log(data)
  }
  return (
    <WrapForm onSubmit={handleSubmit}>
      {loading && <FullSpinner />}
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input name="email" value={data.email} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" value={data.password} onChange={handleChange} />
      </FormGroup>
      <ButtonGroup>
        <Button mr="1rem" type="submit">
          Login {loading && <Spinner />}
        </Button>
        <Button type="reset">Reset</Button>
      </ButtonGroup>
    </WrapForm>
  )
}

export default Form
