import React from "react";

function FilterForm(props) {
    return (
      <form className="filter">
        <div className="form-group">
          <label htmlFor="language">Filter Term:</label>
          <input
            value={props.empFilter}
            onChange={props.handleInputChange}
            name="term"
            type="text"
            className="form-control"
            placeholder="Enter Filter"
          />
        </div>
      </form>
    );
  }
  
  export default FilterForm;