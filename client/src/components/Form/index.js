import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <>
    <form>
      <div className="form-row">
        <div className="col-md-10">
          <input
            name="q"
            id="Title"
            type="text"
            className="form-control mb-2"
            placeholder="Enter Book"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-2">
          <button
            type="submit"
            className="btn btn-light btn-md form-control"
            onClick={handleFormSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </>
  );
}

export default Form;
