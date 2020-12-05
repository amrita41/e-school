import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function StudentSubject(props) {
  const history = useHistory();
  const { subName, classNo } = useParams();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [list, setList] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
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
    axios
      .get("http://localhost:3001/api/announcement")
      .then((res) => {
        console.log(res);
        setAnnouncement(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (sub) => {
    history.push("/" + sub + "/" + classNo + "/general");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {list.map(
          (row) =>
            row.standard == classNo && (
              <ListItem
                button
                key={row.name}
                onClick={() => handleClick(row.name)}
              >
                <ListItemText primary={row.name} />
              </ListItem>
            )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="header">
            <button
              className="header-button"
              onClick={() =>
                history.push("/" + subName + "/" + classNo + "/general")
              }
            >
              General
            </button>
            <button
              className="header-button"
              onClick={() =>
                history.push("/" + subName + "/" + classNo + "/hw")
              }
            >
              Homeworks
            </button>
            <button
              className="header-button"
              onClick={() =>
                history.push("/" + subName + "/" + classNo + "/quiz")
              }
            >
              Quizzes
            </button>
            <button
              className="header-button"
              onClick={() =>
                history.push("/" + subName + "/" + classNo + "/extra")
              }
            >
              Miscellaneous
            </button>

            <button className="header-button" onClick={() => history.push("/")}>
              Back
            </button>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="mycard">
          <div className="card auth-card-announcement">
            <h6>All announcements goes here..</h6>
            <hr />
            <br />
            <br />
            {announcement.map(
              (row) =>
                row.standard == classNo &&
                row.subject == subName && (
                  <div>
                    <h6>Subject: {row.subject}</h6>
                    <h6>Title: {row.title}</h6>
                    <h6>Description: {row.description}</h6>
                    <h6>Posted by: {row.teacher}</h6>
                    <h6>Posted at: {row.time}</h6>
                    <hr />
                    <br />
                    <br />
                  </div>
                )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentSubject;
