import React, { useReducer } from 'react'
import axios from 'axios'
import { QuestionCard } from './questionCard'


export default class CreateQuiz extends React.Component {


    state = {
        quizName: "",
        createdBy: "",
        questions: [],
        optionStatus:false,
        createdQuestion: "",
        createdOption: [],
        optionName: "",
        optionArr: []



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
                        (q,r) => {
                            return (
                                <React.Fragment>

                                    <div>
                                        {<QuestionCard key={r}
                                        name={q.question}
                                            updateFormField={this.updateFormField}
                                            optionIsCorrect={this.state.optionIsCorrect}
                                            optionValue={this.state.optionName}
                                            createdQuestion={q.createdQuestion} 
                                            optionArr={this.state.optionArr}
                                            addOption={this.addOption}
                                            onSelectChange={this.onSelectChange}/>}
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
        if(this.state.optionArr===[]){
            const newOption = {
                optionValue: this.state.optionValue,
                optionIsCorrect: this.state.optionStatus
            }
            this.state.optionArr.push(newOption)
        }else{
        const clone = this.state.optionArr.slice()
        console.log("clone", clone)
        const newOption = {
            optionValue: this.state.optionValue,
            optionIsCorrect: this.state.optionStatus
        }
        
        clone.push(newOption)
        this.setState({
          optionArr: clone,
          optionName:''
        })
    }}

    onSelectChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
}





