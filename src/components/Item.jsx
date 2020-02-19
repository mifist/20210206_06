import "./Item.css";

const Item = ({ item }) => {
  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={() => {}}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {" "}
          {item.value}
        </label>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={() => {}}>
        Remove
      </button>
    </li>
  );
};

export default Item;
