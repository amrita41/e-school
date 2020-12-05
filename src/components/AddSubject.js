import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";

function AddSubject() {
  const history = useHistory();
  const [sub, setSub] = useState("");
  const [std, setStd] = useState();
  const [teacher, setTeacher] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/subject", {
        name: sub,
        standard: std,
        teacher: teacher,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/subject");
    M.toast({
      html: "Subject Added Successfully!!",
      classes: "#00bcd4 cyan",
    });
  };
  return (
    <div>
      <div className="add-card">
        <div className="card add-card-child">
          <h5>Fill Subject Info.</h5>
          <input
            type="text"
            placeholder="Subject Name"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Class"
            value={std}
            onChange={(e) => setStd(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          ></input>
          <button
            className="waves-effect waves-light btn"
            onClick={(e) => handleClick(e)}
          >
            Add Subject
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSubject;
