import React from "react";
import authService from "../service/auth-service";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate;

export class Signup extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        quizCreated: [],
        quizDone: [],
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
                backgroundColor: '#edf2f4',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"

            }}>
                {/* <div className="card" style={{ width: "60%", height: "fit-content" }}>

                    <div className="card-body">
                        <h5 class="card-title mb-3 text-center">Signup</h5>
                        <label className="mb-2">First Name</label><input type="text" className="form-control mb-3" value={this.state.firstName} name="firstName" onChange={this.updateFormField} />
                        <label className="mb-2">Last Name</label><input type="text" className="form-control mb-3" value={this.state.lastName} name="lastName" onChange={this.updateFormField} />
                        <label className="mb-2">Email</label><input type="text" className="form-control mb-3" value={this.state.email} name="email" onChange={this.updateFormField} />
                        <label className="mb-2">Password</label><input type="text" className="form-control mb-3" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary mb-3" onClick={async () => {
                           await authService.signup(this.state)
                           window.location.replace("/")
                        }}>Sign Up!</button>
                        <p>Already a member? Sign in <a href="/login">here</a></p>
                    </div>
                </div>
            </div> */}
                <div className="card" style={{ width: "60%", height: "fit-content" }}>
                    <form>
                        <div className="card-body">
                            <h5 class="card-title mb-3 text-center">Signup</h5>
                            <label className="mb-2 form-label" for="validationCustom01" >First Name</label><input type="text" className="form-control mb-3" id="validationCustom01" value={this.state.firstName} name="firstName" onChange={this.updateFormField} />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <label className="mb-2 form-label">Last Name</label><input type="text" id="validationCustom02" className="form-control mb-3" value={this.state.lastName} name="lastName" onChange={this.updateFormField} />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <label for="validationCustomUsername" className="mb-2 form-label">Username</label><input type="text" className="form-control mb-3" value={this.state.email} name="email" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={this.updateFormField} />
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                            <label className="mb-2">Password</label><input type="text" className="form-control mb-3" value={this.state.password} name="password" onChange={this.updateFormField} />
                            <button className="btn btn-sm btn-primary mb-3" type="submit" onClick={async () => {
                                await authService.signup(this.state)
                                window.location.replace("/")
                            }}>Sign Up!</button>
                            <p>Already a member? Sign in <a href="/login">here</a></p>
                        </div>
                        </form>
                </div>
            
        </div>
        </React.Fragment >
    }
}