import React from "react";
import { Navbar } from "./navbar";


const url="https://2999-haikalchong-project2bac-1upnv0atgru.ws-us93.gitpod.io"

export class Profile extends React.Component {


    componentDidMount = async () => {
        const userData = localStorage.getItem("user")
        const userDataJSON = JSON.parse(userData)
        this.setState({
            data: userDataJSON
        })
    }

    state = {
        data: [],
        activePage:'home'
    }

    renderPage=()=>{
        if (this.state.activePage==='home'){
            return <div>

            </div>
        }
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


