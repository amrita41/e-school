import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import M from "materialize-css";
import { useParams } from "react-router-dom";

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

function UpdateTeacher() {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("2020-11-16");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    getTeacherById();
  }, []);

  const getTeacherById = () => {
    axios
      .get("http://localhost:3001/api/teacher/" + id)
      .then((res) => {
        setName(res.data.name);
        setEmployeeId(res.data.regNo);
        setEmail(res.data.email);
        setGender(res.data.gender);
        setDesignation(res.data.designation);
        setMobile(res.data.mobile);
        setDob(res.data.dob);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/teacher/" + id, {
        name,
        employeeId,
        email,
        dob,
        gender,
        designation,
        mobile,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/teacher");
    M.toast({
      html: "Teacher Updated Successfully!!",
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
            placeholder="Employee Id"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email Id"
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
              className={classes.textField}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Mobile No."
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <button
            className="waves-effect waves-light btn"
            onClick={(e) => submitForm(e)}
          >
            Update Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateTeacher;
