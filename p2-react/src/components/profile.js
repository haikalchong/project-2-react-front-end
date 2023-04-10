import React from "react";
import { Navbar } from "./navbar";
import axios from "axios";


const url = "https://express-project-2.onrender.com"

export class Profile extends React.Component {


    componentDidMount =() => {
        const userData =  localStorage.getItem("user")
        const userDataJSON =  JSON.parse(userData)
        this.setState({
            data: userDataJSON
        })
    }

    state = {
        data: [],
        activePage: 'home',
        firstName: "",
        lastName: "",
        username:"",
        
        
    }

    renderPage = () => {
        if (this.state.activePage === 'home') {
            return <div style={{
                backgroundColor: '#edf2f4',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <div className="card" style={{ width: "60%", height: "fit-content" }}>
                    <div className="card-body">
                        <h5 className="card-title mb-3 text-center">Welcome! {this.state.data.firstName}</h5>
                        <button className='btn btn-primary btn-sm' onClick={() => {
                            this.setState({

                                activePage: "edit"
                            })
                        }}>Edit Profile</button>
                        <button className='btn btn-danger btn-sm' onClick={async ()=>{
                            
                        }}>Delete Profile</button>

                    </div>

                </div>


            </div>
        } if (this.state.activePage === 'edit') {
            return <div style={{
                backgroundColor: '#edf2f4',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            }}>

                <div className="card" style={{ width: "60%", height: "fit-content" }}>
                    <form>
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-center">Signup</h5>
                            <label className="mb-2 form-label" htmlFor="validationDefault01" >First Name</label><input type="text" className="form-control mb-3" id="validationDefault01" value={this.state.firstName} name="firstName" onChange={this.updateFormField} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <label className="mb-2 form-label" htmlFor="validationDefault02">Last Name</label><input type="text" id="validationDefault02" className="form-control mb-3" value={this.state.lastName} name="lastName" onChange={this.updateFormField} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <label htmlFor="validationCustomUsername" className="mb-2 form-label">Username</label><input type="text" className="form-control mb-3" value={this.state.username} name="username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={this.updateFormField} />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            
                            {/* {this.state.data.quizCreated.map((o,i)=>{
                               return  <ul className="list-group list-group-flush" key={i}><li className="list-group-item">{o} <button className="btn btn-primary btn-sm">Update</button><button className="btn btn-danger btn-sm">Delete</button></li></ul>
                            })} */}
                            <button className="btn btn-sm btn-primary mb-3" onClick={()=>{
                                this.updateUser()

                            }}>Update</button>
                            
                        </div>
                    </form>
                </div>

            </div>


        }
    }

    updateFormField=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    updateUser= async ()=>{
        const updatedUser={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            username:this.state.username,
        }
        const result = await axios.put(url + `/user/${this.state.data._id}`,updatedUser)
        
        
      
    }

    render() {
        return <React.Fragment>
            <Navbar />
           {this.renderPage()}

        </React.Fragment>
    }
}


