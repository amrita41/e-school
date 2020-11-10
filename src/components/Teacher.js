import React from "react";
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

function createData(name, gender, mob, email, address, subjects) {
  return {
    name,
    gender,
    mob,
    email,
    address,
    subjects,
  };
}

const rows = [
  createData(
    "Amrita Kumari",
    "Female",
    "8340681735",
    "amrita@mnnit.ac.in",
    "Patna, Bihar",
    "Math, Physics"
  ),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Mob no</StyledTableCell>
              <StyledTableCell align="right">Email id</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Subjects</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">{row.mob}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">{row.subjects}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon />
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