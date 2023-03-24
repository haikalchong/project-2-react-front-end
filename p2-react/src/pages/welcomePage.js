import React from 'react'
import { Signup } from '../components/signup'
import { Login } from '../components/login'
import axios from 'axios'

export default class Welcome extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        quizCreated: [],
        quizDone: [],
        password: "",
        login: "signin"
    }


    render() {
        if (this.state.login === "signup"){
            return <Signup firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            updateFormField={this.updateFormField} 
            createNewAccount={this.createNewAccount}/>
        }else if ( this.state.login ==="signin"){
            return <Login firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            updateFormField={this.updateFormField} 
            signin={this.logIn}/>
        }


        
    }
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createNewAccount = async () => {
       
        const dburl= "https://2999-haikalchong-project2bac-el2gxlkwdlx.ws-us92.gitpod.io"
        const newUser = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email: this.state.email,
            quizCreated: this.state.quizCreated,
            quizDone: this.state.quizDone,
            password: this.state.password
        } 
        const addNewUser = await axios.post(dburl + "/user", newUser)

        
        this.setState({
            login: "signin"
        })
        
    }
    logIn = async () => {
        const dburl= "https://2999-haikalchong-project2bac-el2gxlkwdlx.ws-us92.gitpod.io"
        const userid= {
            email : this.state.email,
            password : this.state.password
        }
        const result = await axios.post(dburl + "/login" , userid)
        // const token = result.insertedId
        console.log(result.data.token)
        localStorage.setItem("token", result.data.token)
    }
}