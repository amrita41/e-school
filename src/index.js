import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import SetPassword from "./components/SetPassword";
import Admin from "./components/Admin";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Class from "./components/Class";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AddClass from "./components/AddClass";
import Class1 from "./components/subjects/Class1";
import AddSubject from "./components/AddSubject";

const routing = (
  <BrowserRouter>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/set-password">
      <SetPassword />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/student">
      <Student />
    </Route>
    <Route path="/teacher">
      <Teacher />
    </Route>
    <Route path="/class">
      <Class />
    </Route>
    <Route path="/add-student">
      <AddStudent />
    </Route>
    <Route path="/add-teacher">
      <AddTeacher />
    </Route>
    <Route path="/add-class">
      <AddClass />
    </Route>
    <Route path="/subjects-class01">
      <Class1 />
    </Route>
    <Route path="/add-subject">
      <AddSubject />
    </Route>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
