import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  paper: {
    width: 1200,
    marginLeft: 70,
  },
});

function Student() {
  const classes = useStyles();
  const [list, setList] = useState([]);
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
    //window.location.reload(false);
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:3001/api/student/" + _id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
  };

  const handleUpdate = (id) => {
    history.push("/edit-student/" + id);
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Students
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/add-student">Add new Student</a>
            </li>
            <li>
              <a href="/admin">Back</a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Registration No.</StyledTableCell>
              <StyledTableCell align="right">Email id</StyledTableCell>
              <StyledTableCell align="right">Date of Birth</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Standard</StyledTableCell>
              <StyledTableCell align="right">Roll No.</StyledTableCell>
              <StyledTableCell align="right">Mobile No.</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.regNo}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.dob}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">{row.standard}</StyledTableCell>
                <StyledTableCell align="right">{row.rollNo}</StyledTableCell>
                <StyledTableCell align="right">{row.mobileNo}</StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    onClick={() => handleUpdate(row._id)}
                    style={{ color: "green" }}
                  >
                    <EditIcon />
                  </button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    onClick={() => handleDelete(row._id)}
                    style={{ color: "red" }}
                  >
                    <DeleteIcon />
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Student;
