import React from "react";
import { Navbar } from "./navbar";



export class Profile extends React.Component{


    componentDidMount = async () =>{
           const userData = localStorage.getItem("user")
       const userDataJSON = JSON.parse(userData)
       this.setState({
        data: userDataJSON
       })
    }

    state={
        data:[]
    }



    render() {
        return <React.Fragment>
            <Navbar />
            <h2>Welcome{this.state.data.firstName}</h2>
            <button>Edit Profile</button>
            <button>Delete Profile</button>
    
        </React.Fragment>
    }
}


