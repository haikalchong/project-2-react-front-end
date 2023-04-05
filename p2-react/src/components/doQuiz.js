import axios from 'axios'
import React from 'react'
import { StartQuiz } from './startQuiz'


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
                           </ul>
                           <button onClick={()=>{
                            this.setState({
                                activePage:"start",
                                id:d._id,
                                questions:d.questions
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
                this.setState({
                    activeQuestion:this.state.activeQuestion+1
                })
            }}>Next Question</button>
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
            
            {this.renderPage()}
            {/* {this.state.quizzes?.map(q => {

            return (<div>{q.quizName}</div>)
            })} */}
            
          
        </React.Fragment>
    }



}