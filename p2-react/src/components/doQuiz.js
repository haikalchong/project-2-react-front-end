import axios from 'axios'
import React from 'react'

import { Navbar } from "./navbar";


export class DoQuiz extends React.Component {

    state = {
        activeQuestion: 0,
        score: 0,
        activePage: "quiz",
        quizzes: [],
        selectedOption: "",




    }



    getAllQuizes = async () => {
        const url = "https://2999-haikalchong-project2bac-s4lsw6lvits.ws-us93.gitpod.io"
        const result = await axios.get(url + "/quiz")
        console.log(result.data.result)
        return result.data;
    }

    componentDidMount = async () => {
        const url = "https://2999-haikalchong-project2bac-s4lsw6lvits.ws-us93.gitpod.io"
        const result = await axios.get(url + "/quiz")
        
        this.setState({
            quizzes: result.data.result,
            totalQuestions: result.data.result.totalQuestions

        })
    }

    getCorrectAnswer = () => {
        this.setState({
            correctAnswer: this.state.quizzes[this.state.activeQuestion].correctAnswer
        })
    }

    renderPage = () => {

        if (this.state.activePage === "quiz") {
            return <React.Fragment>
               
                <div>
                    {this.state.quizzes.map(
                        (d, e) => {
                            return <div className="card" style={{ width: "60%", height: "fit-content" }} key={e}>
                                <div className="card-body">
                                <h5 className="card-title mb-3"> {d.quizName} </h5>
                                <ul className="list-group">
                                    <li className="list-group-item">{d.topic}</li>
                                    <li className="list-group-item">{d.quizLevel}</li>
                                    <li className="list-group-item">{d.totalQuestions}</li>
                                    <li className="list-group-item">{d.description}</li>
                                </ul>
                                <button className="btn btn-primary btn-sm" onClick={() => {
                                    this.setState({
                                        activePage: "start",
                                        id: d._id,
                                        questions: d.questions,
                                        totalQuestions: d.totalQuestions,
                                        correctAnswer: d.questions[this.state.activeQuestion].correctAnswer


                                    })
                                }}>Start Quiz</button>
                                </div>
                            </div>


                        }

                    )}
                </div>
            </React.Fragment>

        } if (this.state.activePage === "start") {

            return <React.Fragment>
                <div style={{
                    backgroundColor: '#edf2f4',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"

                }}>
                    <div className="card" style={{ width: "60%", height: "fit-content" }}>

                      <div className="card-body">
                        <h5 className="card-title mb-3 text-center">{this.state.questions[this.state.activeQuestion].question}</h5>
                        
                            {this.state.questions[this.state.activeQuestion].options.map(
                                (o, i) => {
                                    return  <ul className="list-group list-group-flush" key={i}>
                                        <li className="list-group-item"><label>{o}</label><input type="radio" className="form-check-input me-1 active" value={o} name="selectedOption" onChange={this.updateFormField} /></li>
                                    </ul>
                                    
                                })}
                        
                        <button name="activeQuestion" className="btn btn-sm btn-primary" onClick={() => {

                            if (this.state.activeQuestion === this.state.totalQuestions - 1 && this.state.questions[this.state.activeQuestion].correctAnswer === this.state.selectedOption) {

                                this.setState({
                                    activePage: "result",
                                    score: this.state.score + 5,



                                })
                                
                            } else if (this.state.activeQuestion === this.state.totalQuestions - 1 && this.state.questions[this.state.activeQuestion].correctAnswer != this.state.selectedOption) {

                                this.setState({
                                    activePage: "result",


                                })
                            } else if (this.state.activeQuestion < this.state.totalQuestions - 1 && this.state.questions[this.state.activeQuestion].correctAnswer === this.state.selectedOption) {


                                this.setState({
                                    activeQuestion: this.state.activeQuestion + 1,
                                    score: this.state.score + 5,
                                    selectedOption: "",
                                    correctAnswer: this.state.questions[this.state.activeQuestion].correctAnswer
                                })
                            } else if (this.state.activeQuestion < this.state.totalQuestions - 1 && this.state.questions[this.state.activeQuestion].correctAnswer != this.state.selectedOption) {

                                this.setState({
                                    activeQuestion: this.state.activeQuestion + 1,
                                    selectedOption: "",
                                    correctAnswer: this.state.questions[this.state.activeQuestion].correctAnswer
                                })
                            }

                        }}>Next</button>
                        </div>  
                    </div>
                </div>


            </React.Fragment>
        }
        if (this.state.activePage === 'result') {
            return <div>
                <h2>Congratulations you have completed the quiz!</h2>
                <p>Your score is : {this.state.score}</p>
                <p>Good Job!</p>
                <p> Ready for another challenge? Click <span><a href="/doQuiz">Here</a></span> </p>
            </div>


        }
    }
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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