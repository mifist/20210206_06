import Item from "./Item";
import Filter from "./Filter";

const ListItems = ({ title, items }) => {
  const updateFilter = (searchTerm) => {
    // todo
  };

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={""} onChange={updateFilter} />
      <ul className="mb-3 p-0">
        <Item item={[]} />
      </ul>
    </section>
  );
};

export default ListItems;
