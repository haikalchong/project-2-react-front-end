import React from "react";

export function Signup(props) {
    return <React.Fragment>
        <div className="container">
            <h5>Sign up with us now!!</h5>

            <div>
                <label>First Name</label><input type="text" className="form-control" value={props.firstName} name="firstName" onChange={props.updateFormField}/>
                <label>Last Name</label><input type="text" className="form-control" value={props.lastName} name="lastName" onChange={props.updateFormField} />
                <label>Email</label><input type="text" className="form-control" value={props.email} name="email" onChange={props.updateFormField} />
                <label>Password</label><input type="text" className="form-control" value={props.password} name="password" onChange={props.updateFormField}/>
            </div>
            <button className="btn btn-sm btn-primary" onClick={props.createNewAccount}>Sign Up!</button>
        </div>
        <div>
            <p>Already a member? Sign in <a href="/login">here</a></p>
        </div>
    </React.Fragment>
}