import axios from "axios";
import {useHistory} from 'react-router-dom'




 const signup= async (x) =>{

    const dburl = "https://2999-haikalchong-project2bac-s4lsw6lvits.ws-us93.gitpod.io"
  
    const addNewUser = await axios.post(dburl + "/user", x)
    
    window.location.replace("/login")


 
    // const navigate= useNavigate()
    // navigate("/");

}


  const userLogin =  async(username,password)=> {
    const dburl = "https://2999-haikalchong-project2bac-s4lsw6lvits.ws-us93.gitpod.io"
    
    const userid = {
        username: username,
        password: password
    }
    const result = await axios.post(dburl + "/login", userid)
    // const token = result.insertedId
    console.log(result.data.token)
    localStorage.setItem("user",JSON.stringify(result.data))
    
    localStorage.setItem("token", result.data.token)

    // const navigate= useNavigate()
    // navigate("/");


    
}



const authService={
    userLogin,
    signup
}

export default authService