import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

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
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Class: {classNo}, Subject: {subName}
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <div className="mycard">
        <div className="card auth-card">
          <input type="text" placeholder="Paste the link for lecture"></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </div>
      </div>
      <div className="mycard">
        <div className="card auth-card">
          <input type="text" placeholder="Post an announcement"></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Post
          </Button>
        </div>
      </div>
      <div className="mycard">
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
      </div>
      <div className="mycard">
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
      </div>
    </div>
  );
}
