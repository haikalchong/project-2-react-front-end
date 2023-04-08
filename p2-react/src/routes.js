import React from "react";
import {
    BrowserRouter, Router,
    Routes,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    Navigate
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { Signup } from "./components/signup";
import CreateQuiz from "./components/createQuiz";
import { AppWrapper } from "./components/AppWrapper";
import { DoQuiz } from "./components/doQuiz";
import { Profile } from "./components/profile";


export class AppRoute extends React.Component {

    componentDidMount= () =>{

        const userData =  localStorage.getItem("user")

        const userDataJSON = JSON.parse(userData)

        if(userDataJSON){
            this.setState({
                userLogged: false
            })
        }

    

    }


    state = {

        userLogged:true
        
      

    }



    render() {



        return <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />}>

                </Route>

                <Route
                    exact
                    path="/doQuiz"
                    element={
                        this.state.userLogged===true ? (
                            <DoQuiz />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />

                <Route path="/signup" element={<Signup />}>

                </Route>

                <Route
                    exact
                    path="/createQuiz"
                    element={
                        this.state.userLogged===true ? (
                            <CreateQuiz />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />

                <Route
                    exact
                    path="/"
                    element={
                        this.state.userLogged===true ? (
                            <Dashboard />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />
                  <Route
                    exact
                    path="/profile"
                    element={
                        this.state.userLogged===true ? (
                            <Profile />
                        ) : (
                            <Navigate replace to={"/login"} />
                           
                        )
                    }
                />




            </Routes>



        </BrowserRouter>




    }
}

