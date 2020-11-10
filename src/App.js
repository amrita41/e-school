import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const login = () => {
    if (name == "admin" && pass == "password") {
      history.push("/admin");
      M.toast({
        html: "Login successful as an admin!!",
        classes: "#00bcd4 cyan",
      });
    } else M.toast({ html: "Invalid credentials", classes: "#f44336 red" });
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
