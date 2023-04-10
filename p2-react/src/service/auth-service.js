import axios from "axios";





 const signup= async (x) =>{

    const dburl = "https://express-project-2.onrender.com"
  
    const addNewUser = await axios.post(dburl + "/user", x)
    
    window.location.replace("/login")


 

}


  const userLogin =  async(username,password)=> {
    const dburl = "https://express-project-2.onrender.com"
    
    const userid = {
        username: username,
        password: password
    }
    const result = await axios.post(dburl + "/login", userid)
    
    console.log(result.data.token)
    localStorage.setItem("user",JSON.stringify(result.data))
    
    localStorage.setItem("token", result.data.token)

    

    
}



const authService={
    userLogin,
    signup
}

export default authService