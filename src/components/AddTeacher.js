import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

function AddTeacher() {
  const history = useHistory();
  return (
    <div>
      <div className="add-card">
        <div className="card add-card-child">
          <h5>Fill Data</h5>
          <input type="text" placeholder="Full Name"></input>
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
          <input type="text" placeholder="Phone no"></input>
          <input type="text" placeholder="Email id"></input>
          <input type="text" placeholder="Address"></input>
          <input type="text" placeholder="Subjects"></input>
          <button
            className="waves-effect waves-light btn"
            onClick={() => history.push("/teacher")}
          >
            Add Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
