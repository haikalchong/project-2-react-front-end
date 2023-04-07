import React from 'react'
import axios from 'axios'
import { Question } from './questions'
import { RenderQuestion } from './renderQuestion'
import { Navbar } from "./navbar";

const url = "https://2999-haikalchong-project2bac-yfsr0me1brf.ws-us93.gitpod.io"

export default class CreateQuiz extends React.Component {

    state = {
        topic: '',
        quizName: "",
        level: 'beginner',
        totalQuestions: '',
        questions: [],
        description: "",

        page: "createQuiz",
        createdQuestion: '',
        options: [],
        correctAnswer: '',
        optionFirst: '',
        optionSecond: '',
        optionThird: '',
        optionFourth: ''
    }


    // componentDidMount() {
    //     const userData = localStorage.getItem("user")
    //     const userDataJSON = JSON.parse(userData)
    //     this.setState({
    //         firstName: userDataJSON.firstName,
    //         createdBy: userDataJSON._id
    //     })
    // }
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    renderPage = () => {
        if (this.state.page === "createQuiz") {
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
                            <h5 class="card-title mb-3 text-center">Create Quiz</h5>
                            <label>Quiz Name</label>
                            <input type="text" value={this.state.quizName} className="form-control mb-3 w-60" name="quizName" onChange={this.updateFormField} />

                            <label>Topic</label>
                            <select value={this.state.level} name="level" className="form-control mb-3 w-60" onChange={this.updateFormField}>
                                <option value="English" name="topic">English</option>
                                <option value="Math" name="topic">Math</option>
                                <option value="Science" name="topic">Science</option>
                                <option value="Humanities" name="topic">Humanities</option>
                                <option value="Programming" name="topic">Programming</option>
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
                                    page: "createQuestions"
                                })
                            }}>Next</button>
                        </div>
                    </div>
                </div>



            </React.Fragment>
        } if (this.state.page === "createQuestions") {
            return <div>
                <RenderQuestion questions={this.state.questions} />

                <Question questions={this.state.questions}
                    createdQuestion={this.state.createdQuestion}
                    options={this.state.options}
                    correctAnswer={this.state.correctAnswer}
                    optionFirst={this.state.optionFirst}
                    optionSecond={this.state.optionSecond}
                    optionThird={this.state.optionThird}
                    optionFourth={this.state.optionFourth}
                    updateFormField={this.updateFormField}
                    addQuestion={this.addQuestion} />
                <button className="btn btn-primary btn-sm" onClick={this.addQuestion}>Add Question</button>
                <div className="container-fluid">
                    <button className="btn btn-success btn-sm" onClick={this.addQuiz}>Add Quiz</button>
                </div>


            </div>
        }
    }

    render() {

        return <div>
            <Navbar />
            {this.renderPage()}
        </div>
    }

    addQuestion = () => {

        const clone = this.state.questions.slice()
        const optionClone = this.state.options.slice()
        optionClone.push(this.state.optionFirst)
        optionClone.push(this.state.optionSecond)
        optionClone.push(this.state.optionThird)
        optionClone.push(this.state.optionFourth)

        const newQuestion = {
            question: this.state.createdQuestion,
            options: optionClone,
            correctAnswer: this.state.correctAnswer
        }


        clone.push(newQuestion)

        this.setState({
            questions: clone,
            createdQuestion: '',
            options: [],
            correctAnswer: '',
            optionFirst: "",
            optionSecond: "",
            optionThird: "",
            optionFourth: ""


        })

    }

    addQuiz = async () => {

        const newQuiz = {
            "quizName": this.state.quizName,
            "topic": this.state.topic,
            "createdBy": this.state.createdBy,
            "quizLevel": this.state.level,
            "totalQuestions": this.state.totalQuestions,
            "questions": this.state.questions,
            "description": this.state.description
        }

        const addNewQuiz = await axios.post(url + "/quiz", newQuiz)


        let quizId = addNewQuiz.data.insertedId;
        const quizObj = {
            "quizId": quizId
        }

        const topicToUpdate = await axios.put(url + "/genre/" + this.state.topic, quizObj)

        const userToUpdate = await axios.put(url + "/userQuiz/" + this.state.createdBy, quizObj)
        


    }
}