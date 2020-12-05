import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import { findByTestId } from "@testing-library/react";

function StudentAttendance(props) {
  const { userName } = useParams();
  const [list, setList] = useState([]);
  // const [sub, setSub] = useState([]);
  const res = userName.split("-")[1];

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/subject")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // {
    //   list.map(
    //     (row) => row.standard == res && setSub((curr) => [...curr, row.name])
    //   );
    // }
  }, []);

  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  return (
    <div>
      <nav>
        <div className="nav-wrapper #283593 indigo darken-3">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            Your Attendance So far...
          </a>
        </div>
      </nav>
      <br />
      <br />
      {/* {testData.map((item, idx) => (
        <div>
          <p style={{ marginLeft: 30 }}>{item.subject}</p>
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        </div>
      ))} */}
      {list.map(
        (row) =>
          row.standard == res && (
            <div>
              <p>{row.name}</p>
              <ProgressBar key={row.name} bgcolor="#ef6c00" completed="60" />
            </div>
          )
      )}
    </div>
  );
}

export default StudentAttendance;
