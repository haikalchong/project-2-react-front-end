import React from 'react'
import "../App.css"
import background from "../images/rainbow-wave.jpg"


export function Question(props) {


    
        return( <React.Fragment>


            <div style={{
                backgroundImage: `url(${background})`,
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            }}>

                <div className="card" style={{ width: "60%", height: "fit-content" }}>
                    <div className="card-body">
                        <h5 className="card-title mb-3 text-center">Create Question</h5>
                        <label>Enter Question</label>
                        <input type="text" name="createdQuestion" value={props.createdQuestion} className="form-control mb-3 w-60" onChange={props.updateFormField} />


                        <ul>
                            <label>Option 1</label><input type="text" name="optionFirst" value={props.optionFirst} className="form-control mb-3 w-60" onChange={props.updateFormField} />
                            <label>Option 2</label><input type="text" name="optionSecond" value={props.optionSecond} className="form-control mb-3 w-60" onChange={props.updateFormField} />
                            <label>Option 3</label><input type="text" name="optionThird" value={props.optionThird} className="form-control mb-3 w-60" onChange={props.updateFormField} />
                            <label>Option 4</label><input type="text" name="optionFourth" value={props.optionFourth} className="form-control mb-3 w-60" onChange={props.updateFormField} />
                        </ul>

                        <label>Correct Answer</label><input type="text" name="correctAnswer" value={props.correctAnswer} className="form-control mb-3 w-60" onChange={props.updateFormField} />

                        <button className="btn btn-primary btn-sm me-2" onClick={props.addQuestion}>Add Question</button>

                        <button className="btn btn-success btn-sm" onClick={props.addQuiz}>Add Quiz</button>
                    </div>
                </div>
            </div>



        </React.Fragment>
        )
    
}