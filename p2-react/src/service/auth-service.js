import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


 const signup= async function createNewAccount() {

    const dburl = "https://2999-haikalchong-project2bac-el2gxlkwdlx.ws-us92.gitpod.io"
    const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
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


  const userLogin =  async(email,password)=> {
    const dburl = "https://2999-haikalchong-project2bac-el2gxlkwdlx.ws-us92.gitpod.io"
    console.log(email,password)
    const userid = {
        email: email,
        password: password
    }
    const result = await axios.post(dburl + "/login", userid)
    // const token = result.insertedId
    console.log(result.data.token)
    localStorage.setItem("user",JSON.stringify(result.data))
    
    localStorage.setItem("token", result.data.token)


    
}



const authService={
    userLogin,
    signup
}

export default authService