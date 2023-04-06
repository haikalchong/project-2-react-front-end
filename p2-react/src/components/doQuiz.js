import axios from 'axios'
import React from 'react'
import { StartQuiz } from './startQuiz'
import { Navbar } from "./navbar";


export class DoQuiz extends React.Component {

    state = {
        activeQuestion: 0,
        score: 0,
        activePage: "quiz",
        quizzes: [],

    }



    getAllQuizes = async () => {
        const url = "https://2999-haikalchong-project2bac-yfsr0me1brf.ws-us93.gitpod.io"
        const result = await axios.get(url + "/quiz")
        console.log(result.data.result)
        return result.data;
    }

    componentDidMount =async() =>{
        const url = "https://2999-haikalchong-project2bac-yfsr0me1brf.ws-us93.gitpod.io"
        const result = await axios.get(url + "/quiz")
        console.log(result.data.result)
        this.setState({
            quizzes: result.data.result
        })
       }

    renderPage =  () => {

        if (this.state.activePage === "quiz") {
            return <React.Fragment>
                {console.log("here")}
                <div>
                    {this.state.quizzes.map(
                        (d, e) => {
                            return <div className="container" key={e}>
                                <h5> {d.quizName} </h5>
                                <ul>
                            <li>{d.topic}</li>
                            <li>{d.quizLevel}</li>
                            <li>{d.totalQuestions}</li>
                            <li>{d.description}</li>
                           </ul>
                           <button onClick={()=>{
                            this.setState({
                                activePage:"start",
                                id:d._id,
                                questions:d.questions,
                                totalQuestions:d.totalQuestions

                            })
                           }}>Start Quiz</button>
                            </div>


                        }
                        
                    )}
                </div>
            </React.Fragment>

        }if(this.state.activePage==="start"){
            return <React.Fragment>
                  <div>
            <h2>{this.state.questions[this.state.activeQuestion].question}</h2>
            <ul>
                {this.state.questions[this.state.activeQuestion].options.map(
                    (o,i)=>{
                    return <li key={i}>{o}</li>
                })}
            </ul>
            <button  name="activeQuestion" onClick={()=>{
                if(this.state.activeQuestion < this.state.totalQuestions -1){
                this.setState({
                    activeQuestion:this.state.activeQuestion+1
                })}else{
                    this.setState({
                        activePage:'result'
                    })
                }
            }}>Next</button>
         </div>


            </React.Fragment>
        }
    }
    updateFormField= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return <React.Fragment>
            <Navbar />
            {this.renderPage()}
            {/* {this.state.quizzes?.map(q => {

            return (<div>{q.quizName}</div>)
            })} */}
            
          
        </React.Fragment>
    }



}