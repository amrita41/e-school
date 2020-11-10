import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  paper: {
    width: 1200,
    margin: 100,
  },
});

function createData(subject, teacher, st1, st2) {
  return { subject, teacher, st1, st2 };
}

const rows = [
  createData("Computer", "Amrita Kumari", "Abhinav Giri", "Meghana Sandhya"),
];

function Class1() {
  const classes = useStyles();

  return (
    <div>
      <nav>
        <div className="nav-wrapper #000000 black">
          <a href="#" className="brand-logo" style={{ fontSize: "20px" }}>
            List of Subjects taught in Class: 01
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/add-subject">Add new subject</a>
            </li>
            <li>
              <a href="/class">Back</a>
            </li>
          </ul>
        </div>
      </nav>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell align="right">Main Teacher</TableCell>
              <TableCell align="right">Substitute Teacher-01</TableCell>
              <TableCell align="right">Substitute Teacher-02</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.subject}>
                <TableCell component="th" scope="row">
                  {row.subject}
                </TableCell>
                <TableCell align="right">{row.teacher}</TableCell>
                <TableCell align="right">{row.st1}</TableCell>
                <TableCell align="right">{row.st2}</TableCell>
                <TableCell align="right">
                  <EditIcon />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Class1;
