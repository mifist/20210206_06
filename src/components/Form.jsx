const Form = () => {
  const handleChange = () => {
    // todo
  }

  const handleSubmit = e => {
    //todo
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" value={"email"} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" value={"password"} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Form
