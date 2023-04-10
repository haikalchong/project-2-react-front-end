import React from "react";
import {
    BrowserRouter, Router,
    Routes,
    Route,
   
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { Signup } from "./components/signup";
import CreateQuiz from "./components/createQuiz";
import { DoQuiz } from "./components/doQuiz";
import { Profile } from "./components/profile";
import Auth from "./components/auth";
import { Search } from "./components/search";
import { MyQuiz } from "./components/myquiz";


export class AppRoute extends React.Component {




    state = {

        userLogged: false



    }




    render() {



        return <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />}>

                </Route>

                <Route exact
                    path="/doQuiz"
                    element={

                        <Auth>
                            <DoQuiz />
                        </Auth>

                    }
                />

                <Route exact
                    path="/myQuiz"
                    element={

                        <Auth>
                            <MyQuiz />
                        </Auth>

                    }
                />

                <Route exact
                    path="/search"
                    element={

                        <Auth>
                            <Search />
                        </Auth>

                    }
                />

                <Route path="/signup" element={<Signup />}>

                </Route>

                <Route
                    exact
                    path="/createQuiz"
                    element={
                        <Auth>
                            <CreateQuiz />
                        </Auth>
                    }
                />

                <Route
                    exact
                    path="/"
                    element={
                        <Auth>
                            <Dashboard />
                        </Auth>
                    }
                />
                <Route
                    exact
                    path="/profile"
                    element={
                        <Auth>
                            <Profile />
                        </Auth>
                    }
                />




            </Routes>



        </BrowserRouter>




    }
}

