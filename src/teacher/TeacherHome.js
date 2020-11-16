import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TeacherHome() {
  const classes = useStyles();
  const history = useHistory();
  const { employeeId } = useParams();
  const [sub, setSub] = useState([]);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/teacher")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3001/api/subject")
      .then((res) => {
        console.log(res);
        setSub(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    list.map((row) => row.employeeId == employeeId && setName(row.name));
  });

  const handleClick = (subName, classNo) => {
    history.push("/action/" + subName + "/" + classNo);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome, {name}
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <h5 style={{ textAlign: "center" }}>
        Check out the subjects that you teach in various classes
      </h5>
      <br />
      <br />
      <div className="mycard">
        <div className="card auth-card">
          <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Subject Name</TableCell>
                  <TableCell align="right">Class</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sub.map(
                  (row) =>
                    row.teacher == name && (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.standard}</TableCell>
                        <TableCell align="right">
                          <button
                            className="waves-effect waves-light btn #4527a0 deep-purple darken-2"
                            onClick={() => handleClick(row.name, row.standard)}
                          >
                            Move
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
