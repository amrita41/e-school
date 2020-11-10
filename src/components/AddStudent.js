import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

function AddStudent() {
  const history = useHistory();
  return (
    <div>
      <div className="add-card">
        <div className="card add-card-child">
          <h5>Fill Data</h5>
          <input type="text" placeholder="Full Name"></input>
          <input type="text" placeholder="Father's Name"></input>
          <input type="text" placeholder="Mother's Name"></input>
          <br />
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <input type="text" placeholder="Class"></input>
          <input type="text" placeholder="Roll No"></input>
          <input type="text" placeholder="Mob No"></input>
          <input type="text" placeholder="Email id"></input>
          <input type="text" placeholder="Address"></input>
          <button
            className="waves-effect waves-light btn"
            onClick={() => history.push("/student")}
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
