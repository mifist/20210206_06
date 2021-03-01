import React, {useState} from "react"

function Counter({children}) {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  return children({
    count,
    increment,
    decrement,
  })
}

export default Counter
