import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import M from "materialize-css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function AddStudent() {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [roll, setRoll] = useState();
  const [mob, setMob] = useState("");
  const [date, setDate] = useState("2020-11-16");
  const [standard, setStandard] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/student", {
        name: name,
        regNo: reg,
        email: email,
        dob: date,
        gender: gender,
        rollNo: roll,
        mobileNo: mob,
        standard: standard,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/student");
    M.toast({
      html: "Student Added Successfully!!",
      classes: "#00bcd4 cyan",
    });
    window.location.reload(false);
  };
  return (
    <div>
      <div className="add-card">
        <div className="card add-card-child">
          <h5>Fill Data</h5>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Admission Number"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              defaultValue="2020-11-16"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <br />
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <input
            type="number"
            placeholder="Class"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Roll No"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Mobile No"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
          ></input>
          <button
            className="waves-effect waves-light btn"
            onClick={(e) => submitForm(e)}
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
