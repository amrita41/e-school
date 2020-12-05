import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import { Flag } from "@material-ui/icons";

const useStyles = makeStyles({
  paper: {
    width: 600,
    marginLeft: 350,
  },
});

function TakeAttendance() {
  const { subName, classNo } = useParams();
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
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
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Students
          </a>
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/class">Back</a>
            </li>
          </ul> */}
        </div>
      </nav>
      <br />
      <br />
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Name</TableCell>
              <TableCell align="right">Roll No.</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(
              (row) =>
                row.standard == classNo && (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.rollNo}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell>
                      <button
                        className="waves-effect waves-light btn"
                        disabled={flag1}
                        onClick={() => setFlag1(true)}
                      >
                        Present
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        className="waves-effect waves-light btn #e53935 red darken-1"
                        disabled={flag2}
                        onClick={() => setFlag2(true)}
                      >
                        Absent
                      </button>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TakeAttendance;
