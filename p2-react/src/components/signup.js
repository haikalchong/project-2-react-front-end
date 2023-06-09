import React from "react";
import authService from "../service/auth-service";
import background from "../images/rainbow-wave.jpg"
import "../App.css"

export class Signup extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",
        quizCreated: [],
        password: "",

    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render() {
        return <React.Fragment>

            <div style={{
                backgroundImage: `url(${background})`,
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"

            }} className="signup">
                <div className="card" style={{ width: "60%", height: "fit-content",opacity:'0.92' }}>

                    <div className="card-body" style={{opacity:'1'}}>
                        <h5 className="card-title mb-3 text-center">Signup</h5>
                        <label className="mb-2">First Name</label><input type="text" className="form-control mb-3" value={this.state.firstName} name="firstName" onChange={this.updateFormField} />
                        <label className="mb-2">Last Name</label><input type="text" className="form-control mb-3" value={this.state.lastName} name="lastName" onChange={this.updateFormField} />
                        
                        <label className="mb-2">Username</label><input type="text" className="form-control mb-3" value={this.state.username} name="username" onChange={this.updateFormField} />
                        <label className="mb-2">Password</label><input type="text" className="form-control mb-3" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary mb-3" onClick={async () => {
                           await authService.signup(this.state)
                          
                        }}>Sign Up!</button>
                        <p>Already a member? Sign in <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
               
        </React.Fragment >
    }
}