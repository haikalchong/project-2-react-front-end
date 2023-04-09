import React from "react";
import authService from "../service/auth-service";



export default class Login extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",
        quizCreated: [],
        password: "",
        login: "signup",
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
                        <label>Username</label><input type="text" className="form-control mb-3 w-60" value={this.state.username} name="username" onChange={this.updateFormField} />
                        <label>Password</label><input type="text" className="form-control mb-3 w-60" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary" onClick={() => {
                            this.loginButton(this.state.username,this.state.password)
                        }}>Sign in!</button>
                          <p>Not a member? Sign up now <a href="/signup">here!</a></p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    }

    loginButton=async (username,password)=>{
        await authService.userLogin(username,password)
        
        window.location.replace("/")
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