import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

const App = () => {
  return (
    <div className="container py-3">
      <NewItem />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" items={[]} />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" items={[]} />
          <button className="btn btn-danger btn-lg btn-block">
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
