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
import AddSubject from "./components/AddSubject";
import UpdateStudent from "./components/UpdateStudent";
import UpdateTeacher from "./components/UpdateTeacher";
import ClassStudents from "./components/ClassStudents";
import ClassSubjects from "./components/ClassSubjects";
import StudentHome from "./student/StudentHome";
import StudentMarks from "./student/StudentMarks";
import StudentSubject from "./student/StudentSubject";
import StudentAttendance from "./student/StudentAttendance";
import SubHw from "./student/SubHw";
import SubExtra from "./student/SubExtra";
import SubQuiz from "./student/SubQuiz";
import SubGeneral from "./student/SubGeneral";
import TeacherHome from "./teacher/TeacherHome";
import SubjectAction from "./teacher/SubjectAction";

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
    <Route path="/students-class/:classNo">
      <ClassStudents />
    </Route>
    <Route path="/subjects-class/:classNo">
      <ClassSubjects />
    </Route>
    <Route path="/edit-student/:id">
      <UpdateStudent />
    </Route>
    <Route path="/edit-teacher/:id">
      <UpdateTeacher />
    </Route>
    <Route path="/add-subject">
      <AddSubject />
    </Route>
    <Route path="/student-home/:userName">
      <StudentHome />
    </Route>
    <Route path="/:userName/marks">
      <StudentMarks />
    </Route>
    <Route path="/:userName/attendance">
      <StudentAttendance />
    </Route>
    <Route path="/:userName/subjects">
      <StudentSubject />
    </Route>
    {/* history.push("/" + subName + "/" + res + "/general"); */}
    <Route path="/:subName/:classNo/general">
      <SubGeneral />
    </Route>
    <Route path="/:subName/:classNo/quiz">
      <SubQuiz />
    </Route>
    <Route path="/:subName/:classNo/hw">
      <SubHw />
    </Route>
    <Route path="/:subName/:classNo/extra">
      <SubExtra />
    </Route>
    <Route path="/teacher-home/:employeeId">
      <TeacherHome />
    </Route>
    <Route path="/action/:subName/:classNo">
      <SubjectAction />
    </Route>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
