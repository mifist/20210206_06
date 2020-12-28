import Cart from "./Cart"

const CartList = ({items}) => {
  return (
    <div className="cart-box">
      <Cart item={items[0]} />
      <Cart item={items[1]} />
    </div>
  )
}

export default CartList
