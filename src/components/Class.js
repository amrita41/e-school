import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Filter1Icon from "@material-ui/icons/Filter1";

function Class() {
  const history = useHistory();
  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Classes
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/add-class">Add new class</a>
            </li>
            <li>
              <a href="/admin">Back</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex-container">
        <div className="card class-card">
          <p>Class: 01</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class01")}
          >
            List of Students enrolled in this class
          </button>

          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class01")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          <p>Class: 02</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class02")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class02")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          <p>Class: 03</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class03")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class03")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          <p>Class: 04</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class04")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class04")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          <p>Class: 05</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class05")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class05")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          <p>Class: 06</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class06")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class06")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 07</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class07")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class07")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 08</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class08")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class08")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 09</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class09")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class09")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 10</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class10")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class10")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 11</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class11")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class11")}
          >
            List of Subjects taught in this class
          </button>
        </div>
        <div className="card class-card">
          {" "}
          <p>Class: 12</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/students-class12")}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => history.push("/subjects-class12")}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
    </div>
  );
}

export default Class;
