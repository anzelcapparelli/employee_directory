import React from "react";
import "./style.css";

function FilterForm(props) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-6">
          <form className="filter">
            <div className="form-group">
              <label htmlFor="language">Filter by First Name:</label>
              <input
                value={props.empFilter}
                onChange={props.handleInputChange}
                name="empFilter"
                type="text"
                className="form-control mb-3"
                placeholder="Enter Filter"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterForm;