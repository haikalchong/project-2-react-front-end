import React, { useReducer } from 'react'
import axios from 'axios'
import { QuestionCard } from './questionCard'


export default class CreateQuiz extends React.Component {


    state = {
        quizName: "",
        createdBy: "",
        questions: [],

        createdQuestion: "",
        createdOption: [],
        optionValue: "",
        optionScore: "",



    }

    componentDidMount() {
        const userData = localStorage.getItem("user")
        const userDataJSON = JSON.parse(userData)
        this.setState({
            firstName: userDataJSON.firstName,
            createdBy: userDataJSON._id
        })
    }
    render() {
        return <React.Fragment>
            <div className="container">
                <div>
                    <label>Quiz Name</label>
                    <input className='form-control' type="text" value={this.state.quizName} onChange={this.updateFormField} name="quizName" />

                </div>


                <div>
                    {this.state.questions.map(
                        (q) => {
                            return (
                                <React.Fragment>

                                    <div>
                                        {<QuestionCard name={q.question}
                                            updateFormField={this.updateFormField}
                                            optionScore={q.optionScore}
                                            optionValue={q.optionValue}
                                            addOption={this.addOption}
                                            createdQuestion={q.createdQuestion} />}
                                    </div>



                                </React.Fragment>
                            )
                        }

                    )}

                </div>
                <button className="btn btn-primary btn-sm mt-2" onClick={this.addQuestion}>Add Question</button>




            </div>



        </React.Fragment>
    }




    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addQuestion = () => {

        const clone = [...this.state.questions]
        const newQuestion = {
            question: this.state.createdQuestion,
            options: this.state.createdOption,
        }
        clone.push(newQuestion)
        this.setState({
            questions: clone,
            createdQuestion: ''
        })

    }

    addOption = () => {
        const clone = this.state.createdOption
        const newOption = {
            optionValue: this.state.optionValue,
            optionScore: this.state.optionScore
        }
        clone.push(newOption)
        this.setState({
            createdOption: clone
        })
    }
}





