import React from 'react'
import { Navbar } from './navbar'
import axios from 'axios'
const url = "https://express-project-2.onrender.com"

export class Search extends React.Component {

    componentDidMount = async () => {
        const quiz = await axios.get(url + "/quiz")
        this.setState({
            data: quiz.data.result
        })
    }

    state = {
        data: [],
        searchTerm: "",
        quiz: []
    }


    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <React.Fragment>
            <Navbar />
            <div style={{
                backgroundColor: '#edf2f4',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                flexDirection:"column"

            }}><div>
                    <h5 className="card-title mb-3 text-center">Search Quizzes</h5>
                    <label>Search</label><input type="text" className="form-control mb-3 w-60" name="searchTerm" value={this.state.searchTerm} onChange={this.updateFormField} />
                </div>
                



                    {this.searchResult(this.state.data).map((d, e) => {
                        return <div className="card mb-4" style={{ width: "60%", height: "fit-content" }}>
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-center">{d.quizName}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">{d.topic}</li>
                                <li className="list-group-item">{d.totalQuestions}</li>
                                <li className="list-group-item">{d.quizLevel}</li>
                                <li className="list-group-item">{d.descriptions}</li>
                            </ul>
                        </div>
                        </div>
                    })}







                </div>
            
        </React.Fragment>
    }


    getAllQuizes = async () => {
        const quiz = await axios.get(url + "/quiz")
        this.setState({
            data: quiz
        })


    }

    searchResult = (items) => {
        console.log(items)
        return items.filter((item) =>

            item.quizName.toLowerCase().includes(this.state.searchTerm) ||
            item.totalQuestions.toLowerCase().includes(this.state.searchTerm) ||
            item.quizLevel.toLowerCase().includes(this.state.searchTerm) ||
            item.topic.toLowerCase().includes(this.state.searchTerm)

        )

    }
}