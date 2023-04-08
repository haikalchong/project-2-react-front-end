import axios from "axios";





 const signup= async (x) =>{

    const dburl = "https://2999-haikalchong-project2bac-yfsr0me1brf.ws-us93.gitpod.io"
  
    const addNewUser = await axios.post(dburl + "/user", x)


 
    // const navigate= useNavigate()
    // navigate("/");

}


  const userLogin =  async(email,password)=> {
    const dburl = "https://2999-haikalchong-project2bac-yfsr0me1brf.ws-us93.gitpod.io"
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

    // const navigate= useNavigate()
    // navigate("/");


    
}



const authService={
    userLogin,
    signup
}

export default authService