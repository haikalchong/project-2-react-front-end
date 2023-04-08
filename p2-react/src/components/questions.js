import React from 'react'


export class Question extends React.Component {





    render() {
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
                        <h5 className="card-title mb-3 text-center">Create Question</h5>
                        <label>Enter Question</label>
                        <input type="text" name="createdQuestion" value={this.props.createdQuestion} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />


                        <ul>
                            <label>Option 1</label><input type="text" name="optionFirst" value={this.props.optionFirst} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />
                            <label>Option 2</label><input type="text" name="optionSecond" value={this.props.optionSecond} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />
                            <label>Option 3</label><input type="text" name="optionThird" value={this.props.optionThird} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />
                            <label>Option 4</label><input type="text" name="optionFourth" value={this.props.optionFourth} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />
                        </ul>

                        <label>Correct Answer</label><input type="text" name="correctAnswer" value={this.props.correctAnswer} className="form-control mb-3 w-60" onChange={this.props.updateFormField} />
                    </div>
                </div>
            </div>



        </React.Fragment>
    }
}