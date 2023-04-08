import React from "react";
import authService from "../service/auth-service";
import { Navigate } from "react-router-dom";


export default class Login extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        quizCreated: [],
        quizDone: [],
        password: "",
        login: "signup",
        loggedin: false
    }

    render() {
        return <React.Fragment>
            <div style={{
                backgroundColor: '#edf2f4',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"

            }}>
                <div className="card" style={{ width: "60%", height: "fit-content" }}>

                    <div className="card-body">
                        <h5 className="card-title mb-3 text-center">Login</h5>
                        <label>Email</label><input type="text" className="form-control mb-3 w-60" value={this.state.email} name="email" onChange={this.updateFormField} />
                        <label>Password</label><input type="text" className="form-control mb-3 w-60" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary" onClick={() => {
                            authService.userLogin(this.state.email, this.state.password)
                        }}>Sign in!</button>
                          <p>Not a member? Sign up now <a href="/signup">here!</a></p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    }


    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // handlelogin = async () => {
    //     try{
    //   const userData = await authService.userLogin(this.state.email,this.state.password)



    //     }catch(err){
    //         console.log(err)
    //     } 
    // }


}