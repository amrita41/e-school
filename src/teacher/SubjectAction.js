import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import axios from "axios";
import M from "materialize-css";

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
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const { subName, classNo } = useParams();
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/announcement", {
        title: title,
        description: description,
        subject: subName,
        standard: classNo,
        teacher: name,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    M.toast({
      html: "Post Added Successfully!!",
      classes: "#00bcd4 cyan",
    });
    window.location.reload(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/subject")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    list.map(
      (row) =>
        row.standard == classNo && row.name == subName && setName(row.teacher)
    );
  });

  const attendanceClick = () => {
    history.push("/attendance/" + subName + "/" + classNo);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Class: {classNo}, Subject: {subName}
          </Typography>
          <Button
            color="inherit"
            onClick={() =>
              history.push("/" + subName + "/" + classNo + "/" + "posts")
            }
          >
            See all the posts
          </Button>
          <Button color="inherit" onClick={() => history.push("/")}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <div className="mycard">
        <div className="card auth-card">
          <h5>Take Attendance</h5>
          <br />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => attendanceClick()}
          >
            Click here!
          </Button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <h5>Post an announcement</h5>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(e) => handleClick(e)}
          >
            Post
          </Button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <h5>Upload a file</h5>
          <br />
          <input type="file"></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Upload
          </Button>
        </div>
      </div>
      {/* <div className="mycard">
        <div className="card auth-card">
          <input type="text" placeholder="Notify for Quiz"></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Notify
          </Button>
        </div>
      </div> */}
      {/* <div className="mycard">
        <div className="card auth-card">
          <input type="file"></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Upload
          </Button>
        </div>
      </div> */}
    </div>
  );
}
