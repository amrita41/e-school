import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [list, setList] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/student")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3001/api/teacher")
      .then((res) => {
        console.log(res);
        setTeacher(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const login = () => {
    {
      list.map(
        (row) =>
          name ==
            row.name.split(" ")[0] + "-" + row.standard + "-" + row.rollNo &&
          pass ==
            row.name.split(" ")[0] + "-" + row.standard + "-" + row.rollNo &&
          history.push("/student-home/" + name)
      );
    }
    {
      teacher.map(
        (row) =>
          name == row.employeeId &&
          pass == row.employeeId &&
          history.push("/teacher-home/" + name)
      );
    }
    if (name == "" || pass == "") {
      M.toast({
        html: "Please fill all the details",
        classes: "#f44336 red",
      });
    } else if (name == "admin" && pass == "password") {
      history.push("/admin");
      M.toast({
        html: "Login successful as an admin!!",
        classes: "#00bcd4 cyan",
      });
    }
  };

  return (
    <div className="App">
      <div className="mycard">
        <div className="card auth-card">
          <h5>Sign In</h5>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button
            className="waves-effect waves-light btn"
            onClick={() => login()}
          >
            Login
          </button>
          <Link to="/set-password">
            <p>Forgot password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
