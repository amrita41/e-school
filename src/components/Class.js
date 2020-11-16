import React from "react";
import { useHistory } from "react-router-dom";

function Class() {
  const history = useHistory();
  const handleStudentClick = (cls) => {
    history.push("/students-class/" + cls);
  };
  const handleSubjectClick = (cls) => {
    history.push("/subjects-class/" + cls);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Classes
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/add-subject">Add new Subject</a>
            </li>
            {/* <li>
              <a href="/add-class">Add new class</a>
            </li> */}
            <li>
              <a href="/admin">Back</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 01</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(1)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(1)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>

      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 02</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(2)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(2)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>

      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 03</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(3)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(3)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 04</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(4)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(4)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 05</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(5)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(5)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 06</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(6)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(6)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 07</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(7)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(7)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 08</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(8)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(8)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 09</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(9)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(9)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 10</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(10)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(10)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 11</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(11)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(11)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <p>Class: 12</p>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleStudentClick(12)}
          >
            List of Students enrolled in this class
          </button>
          <button
            className="waves-effect waves-light btn button-class"
            onClick={() => handleSubjectClick(12)}
          >
            List of Subjects taught in this class
          </button>
        </div>
      </div>
    </div>
  );
}

export default Class;
