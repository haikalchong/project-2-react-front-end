import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authService from "../service/auth-service";

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

    render(){
    return <React.Fragment>
        <div className="container">
            <h5>Login!</h5>

            <div>
                <label>Email</label><input type="text" className="form-control" value={this.state.email} name="email" onChange={this.updateFormField} />
                <label>Password</label><input type="text" className="form-control" value={this.state.password} name="password" onChange={this.updateFormField}/>
            </div>
            <button className="btn btn-sm btn-primary" onClick={()=>{
                authService.userLogin(this.state.email,this.state.password)}}>Sign in!</button>
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