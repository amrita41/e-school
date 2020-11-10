import React from "react";
import { useHistory } from "react-router-dom";

function AddSubject() {
  const history = useHistory();
  return (
    <div>
      <div className="add-card">
        <div className="card add-card-child">
          <h5>Fill Data</h5>
          <input type="text" placeholder="Subject Name"></input>
          {/* It should be dropdown */}
          <input type="text" placeholder="Class"></input>
          <input type="text" placeholder="Teacher Name"></input>
          <input type="text" placeholder="Substitute Teacher-1"></input>
          <input type="text" placeholder="Substitute Teacher-2"></input>
          <button
            className="waves-effect waves-light btn"
            onClick={() => history.push("/subjects-class01")}
          >
            Add Subject
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSubject;
