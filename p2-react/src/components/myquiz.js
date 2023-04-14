import React from "react";
import axios from "axios";
import { Navbar } from "./navbar";

// const url = "https://express-project-2.onrender.com"
const url="https://5500-haikalchong-project2bac-n2hfdmcsiuh.ws-us94.gitpod.io"

export class MyQuiz extends React.Component {

    componentDidMount = () => {
        this.getUserQuiz()
    }


    getUserQuiz = async () => {
        const userData = localStorage.getItem("user")
        const userid = JSON.parse(userData)
        const userQuiz = await axios.get(url + `/userGetQuiz/` + userid._id)
        this.setState({
            userQuiz: userQuiz.data.result
        })
    }

    state = {
        data: [],
        userQuiz: [],
        activePage: 'quiz',
        editedQuiz: [],
        topic: 'english',
        quizName: '',
        level: 'beginner',
        totalQuestions: '',
        questions: [],
        description: "",
        createdQuestion: '',
        options: [],
        correctAnswer: '',
        // optionFirst: '',
        // optionSecond: '',
        // optionThird: '',
        // optionFourth: ''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderPage = () => {
        if (this.state.activePage === 'quiz') {
            return <React.Fragment>
                {this.state.userQuiz.map((o, i) => {
                    return <div className="card" key={i} style={{ width: "60%", height: "fit-content" }}>
                        <div className="card-body">
                            <h5>{o.quizName}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">{o.topic}</li>
                                <li className="list-group-item">{o.quizLevel}</li>

                            </ul>
                            <button className="btn btn-primary btn-sm mt-2" onClick={() => {
                                this.setState({
                                    activePage: "edit",
                                    quizName: `${o.quizName}`,
                                    topic: `${o.topic}`,
                                    level: `${o.quizLevel}`,
                                    totalQuestions: `${o.totalQuestions}`,
                                    description: `${o.descriptions}`,
                                    editedQuiz: { o }

                                })
                            }
                            }>Update</button>
                            <button className="btn btn-danger btn-sm ms-2 mt-2">Delete</button>
                        </div>
                    </div>
                })}
            </React.Fragment>
        } if (this.state.activePage === "edit") {
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
                        <h5 className="card-title mb-3 text-center">Edit Quiz</h5>
                        <label>Quiz Name</label>
                        <input type="text" value={this.state.quizName} className="form-control mb-3 w-60" name="quizName" onChange={this.updateFormField} />

                        <label>Topic</label>
                        <select value={this.state.topic} name="topic" className="form-control mb-3 w-60" onChange={this.updateFormField}>
                            <option value="English" name="topic">English</option>
                            <option value="Math" name="topic">Math</option>
                            <option value="Science" name="topic">Science</option>
                            <option value="Humanities" name="topic">Humanities</option>
                            <option value="General" name="topic">General</option>
                        </select>

                        <label>Level</label>
                        <select value={this.state.level} name="level" className="form-control mb-3 w-60" onChange={this.updateFormField}>
                            <option value="beginner" name="level">Beginner</option>
                            <option value="intermediate" name="level">Intermediate</option>
                            <option value="advanced" name="level">Advanced</option>
                        </select>

                        <label>Number of questions</label>
                        <input type="number" value={this.state.totalQuestions} className="form-control mb-3 w-60" name="totalQuestions" onChange={this.updateFormField} />

                        <label>Quiz Description</label>
                        <textarea value={this.state.description} className="form-control mb-3 w-60" name="description" onChange={this.updateFormField} />

                        <button className="btn btn-primary btn-sm" onClick={() => {
                            this.setState({
                                activePage: "questions"
                            })
                        }}>Next</button>
                    </div>
                </div>
            </div>
        } if (this.state.activePage === "questions") {
            return <div className="card" style={{ width: "60%", height: "fit-content" }}>
                
                {this.state.editedQuiz.o.questions.map((x,y)=>{
                    return <div key={y} className="card-body">
                        <input className="form-control">{x.question}</input>
                        <ul className="list-group">
                            {x.options.map((a,b)=>{
                                return <input className="list-group-item" key={b}>{a}</input>
                            })}
                        </ul>



                    </div>
                })}
                    
                </div>
            
        }
    }
    render() {
        return <React.Fragment>
            <Navbar />
            {this.renderPage()}
        </React.Fragment>
    }
}