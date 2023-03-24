import React from "react";

export function Login(props) {
    return <React.Fragment>
        <div className="container">
            <h5>Login!</h5>

            <div>
                <label>Email</label><input type="text" className="form-control" value={props.email} name="email" onChange={props.updateFormField} />
                <label>Password</label><input type="text" className="form-control" value={props.password} name="password" onChange={props.updateFormField}/>
            </div>
            <button className="btn btn-sm btn-primary" onClick={props.signin}>Sign in!</button>
        </div>

    </React.Fragment>
}