import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { Signup } from "./components/signup";
import CreateQuiz from "./components/create-a-quiz";




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
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Dashboard />}>

          </Route>

          <Route path="/login" element={<Login />}>

          </Route>

          <Route path="/signup" element={<Signup />}>

          </Route>

          <Route path="/createQuiz" element={<CreateQuiz />}>
          </Route>

        </Routes>



      </BrowserRouter>


    </div>
  );
}

export default App;
