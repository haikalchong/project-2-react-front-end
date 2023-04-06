import React from "react";
import authService from "../service/auth-service";

export class Signup extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        quizCreated: [],
        quizDone: [],
        password: "",
        loggedin: false
    }

    updateFormField=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        
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
                        <h5 class="card-title mb-3 text-center">Signup</h5>
                        <label className="mb-2">First Name</label><input type="text" className="form-control mb-3" value={this.state.firstName} name="firstName" onChange={this.updateFormField} />
                        <label className="mb-2">Last Name</label><input type="text" className="form-control mb-3" value={this.state.lastName} name="lastName" onChange={this.updateFormField} />
                        <label className="mb-2">Email</label><input type="text" className="form-control mb-3" value={this.state.email} name="email" onChange={this.updateFormField} />
                        <label className="mb-2">Password</label><input type="text" className="form-control mb-3" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary mb-3" onClick={() => {
                            authService.signup()
                        }}>Sign Up!</button>
                        <p>Already a member? Sign in <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}