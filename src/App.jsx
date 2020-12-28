import CartList from "./components/carts/CartList"
import items from "./data"

function App() {
  return (
    <div className="container">
      <CartList items={items} />
    </div>
  )
}

export default App
