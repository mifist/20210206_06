import React from "react"
import Counter from "./components/Counter"
import Form from "./components/Form"

function App() {
  return (
    <div className="container">
      <div className="row">
        <Counter />
      </div>
      <div className="row">
        <Form />
      </div>
    </div>
  )
}

export default App
