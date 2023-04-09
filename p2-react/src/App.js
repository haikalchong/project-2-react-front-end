import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Router, Link, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { Signup } from "./components/signup";
import CreateQuiz from "./components/createQuiz";
import { AppRoute } from "./routes";




function App() {
 

  return (

    <React.Fragment>
      <AppRoute />


    </React.Fragment>


  );
}

export default App;
