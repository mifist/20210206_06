/** @jsxImportSource @emotion/react */
import {jsx} from "@emotion/react"

import Counter from "./components/Counter"
import Form from "./components/Form"
import {Button, NewButton} from "./components/styles/counter"
import {WrapApp} from "./components/styles/app"
import {yellow, green, gray} from "./components/styles/colors"
import * as mq from "./components/styles/mq"

function App() {
  return (
    <WrapApp>
      <div
        css={{
          backgroundColor: gray,
          [mq.small]: {backgroundColor: yellow},
          [mq.medium]: {backgroundColor: green},
          [mq.large]: {backgroundColor: "transparent"},
        }}
        className="row"
      >
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
    </WrapApp>
  )
}

export default App
