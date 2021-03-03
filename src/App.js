import React from "react"
import Counter from "./components/Counter"
import Form from "./components/Form"
import {Button, NewButton} from "./components/styles/counter"

function App() {
  return (
    <div className="container">
      <div className="row">
        <Counter>
          {({count, increment, decrement}) => (
            <>
              <h1>Counter: {count}</h1>
              <Button marginRight="1rem" onClick={increment}>
                Increment
              </Button>
              <NewButton onClick={decrement}>Decrement</NewButton>
            </>
          )}
        </Counter>

        <Counter>
          {({count, increment, decrement}) => (
            <>
              <p>Counter: {count}</p>
              <p onClick={increment}>Increment</p>
              <p onClick={decrement}>Decrement</p>
            </>
          )}
        </Counter>
      </div>
      <div className="row">
        <Form />
      </div>
    </div>
  )
}

export default App
