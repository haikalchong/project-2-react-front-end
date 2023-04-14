import React from "react";
import authService from "../service/auth-service";
import background from "../images/LoginPageHeroImage.jpg"



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
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems:'flex-end',
                flexDirection:"column",
                flexWrap:'wrap'

            }} className='container login'>
            <div style={{
                backgroundColor: '#edf2f4',
                height: 'auto',
                width: '30%',
                border: '1px solid black',
                borderRadius: '6px',
                textAlign:'center'}} className='m-3 p-3'>
                <h4>A wannabe</h4>
                <p>Welcome to our quiz login page! To access our exciting range of quizzes, please enter your login credentials below. If you're a new user, you can easily create an account and get started. Our quizzes cover a variety of topics and difficulty levels, so you're sure to find something that interests you. With our user-friendly interface and informative feedback, you'll be able to track your progress and improve your knowledge. Let's get started! </p>
            </div>
                <div className="card m-3" style={{ width: "30%", height: "fit-content" }}>

                    <div className="card-body">
                        <h5 className="card-title mb-3 text-center">Login</h5>
                        <label>Username</label><input type="text" className="form-control mb-3 w-60" value={this.state.username} name="username" onChange={this.updateFormField} />
                        <label>Password</label><input type="text" className="form-control mb-3 w-60" value={this.state.password} name="password" onChange={this.updateFormField} />
                        <button className="btn btn-sm btn-primary" onClick={() => {
                            this.loginButton(this.state.username,this.state.password)
                        }}>Sign in!</button>
                          <p className="mt-2">Not a member? Sign up now <a href="/signup">here!</a></p>
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


   


}