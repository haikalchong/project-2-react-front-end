import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Router, Link,Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { Signup } from "./components/signup";
import CreateQuiz from "./components/createQuiz";
import { AppRoute } from "./routes";




function App() {
  // const [token, setToken] = useState();
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  // const userId= localStorage.getItem()
// if (!userData){
//   return <Login/>
// }


// componentDidMount(){
//   const token = localStorage.getItem("token")

// }

  return (
    <div className="container">

      <AppRoute/>





    </div>
  );
}

export default App;
