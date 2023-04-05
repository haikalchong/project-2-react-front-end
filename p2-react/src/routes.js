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


export class AppRoute extends React.Component {

    componentDidMount() {

        const userData = localStorage.getItem("user")

        const userDataJSON = JSON.parse(userData)

        // this.setState({
        //     // firstName: userDataJSON.firstName,
        //     // createdBy: userDataJSON._id,
        //     userLogged: true
            
        //       })

    

    }


    state = {

        userLogged:true
        
      

    }



    render() {



        return <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />}>

                </Route>

                <Route path="/doQuiz" element={<DoQuiz/>}></Route>

                <Route path="/signup" element={<Signup />}>

                </Route>

                <Route
                    exact
                    path="/createQuiz"
                    element={
                        this.state.userLogged ? (
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
                        this.state.userLogged ? (
                            <Dashboard />
                        ) : (
                            <Navigate replace to={"/login"} />
                        )
                    }
                />




            </Routes>



        </BrowserRouter>




    }
}

