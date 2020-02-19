import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
  state = {};

  updateFilter = searchTerm => {};

  render() {
    const { title, items } = this.props;
    return (
      <section>
        <h3 className="mb-3">Title</h3>
        <Filter filter={""} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
          <Item item={[]} />
        </ul>
      </section>
    );
  }
}

export default ListItems;
