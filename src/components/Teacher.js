import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
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
  // table: {
  //   minWidth: 500,
  // },
  paper: {
    width: 1200,
    marginLeft: 70,
  },
});

function Teacher() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const history = useHistory();
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
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:3001/api/teacher/" + _id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
  };

  const handleUpdate = (id) => {
    history.push("/edit-teacher/" + id);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Teachers
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/add-teacher">Add new teacher</a>
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
              <StyledTableCell align="right">Employee Id</StyledTableCell>
              <StyledTableCell align="right">Email Id</StyledTableCell>
              <StyledTableCell align="right">Date of Birth</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Designation</StyledTableCell>
              <StyledTableCell align="right">Mobile No.</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.employeeId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.dob}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell align="right">{row.mobile}</StyledTableCell>
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

export default Teacher;
