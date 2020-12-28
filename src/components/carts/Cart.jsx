const Cart = ({item}) => {
  return (
    <div className="cart">
      <h3>{item.name}</h3>
      <p>{item.name}</p>
      <img src={item.avatar_url} alt={item.name} />
      <button className="delete-button">Delete user</button>
    </div>
  )
}

export default Cart
