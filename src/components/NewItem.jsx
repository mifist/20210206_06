import React, { Component } from "react";
import { generate as id } from "shortid";

class NewItem extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    //
  };

  handleSubmit = event => {
    //
  };

  render() {
    const { value } = this.state;

    return (
      <form>
        <div className="row">
          <div className="col-md-10">
            <input className="form-control mb-3" type="text" value={value} />
          </div>
          <div className="col-md-2">
            <input className="btn btn-success" type="submit" value="Add item" />
          </div>
        </div>
      </form>
    );
  }
}

export default NewItem;
