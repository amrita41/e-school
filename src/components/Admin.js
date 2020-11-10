import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "25px" }}>
            XYZ School (Admin Panel)
          </a>
        </div>
      </nav>
      <div className="three-cards">
        <Link to="/student">
          <div className="card icon-card">
            <img src="https://img.icons8.com/color/150/000000/student-male--v2.png"></img>
            <h5 style={{ color: "black" }}>Students</h5>
          </div>
        </Link>
        <Link to="/teacher">
          <div className="card icon-card">
            <img src="https://img.icons8.com/color/150/000000/conference-background-selected.png"></img>
            <h5 style={{ color: "black" }}>Teachers</h5>
          </div>
        </Link>
        <Link to="/class">
          <div className="card icon-card">
            <img src="https://img.icons8.com/color/150/000000/attendance-mark.png"></img>
            <h5 style={{ color: "black" }}>Classes</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
