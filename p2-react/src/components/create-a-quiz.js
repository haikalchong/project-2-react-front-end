import React, { useReducer } from 'react'
import axios from 'axios'


export default class CreateQuiz extends React.Component{


state={
    quizName : "",
    createdBy : "",
    questions: [],
    results:[]


}

componentDidMount (){
    const userData= localStorage.getItem("user")
    const userDataJSON= JSON.parse(userData)
    this.setState({
        firstName: userDataJSON.firstName,
        createdBy: userDataJSON._id
    })
}
    render(){
        return <React.Fragment>
            <div className="container">
                <form>
                    <label>Quiz Name</label>
                    <input className='form-control' type="text"/>
                    



                    <label>luffy</label>
                    <input type="number"/>
                </form>
               
            </div>



        </React.Fragment>
    }
}



