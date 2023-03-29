import React from 'react'


export class Question extends React.Component {



    

    render() {
        return <React.Fragment>
            
           
            <div className="container-fluid d-flex flex-column">
            <div>
                <h2>Create Questions</h2>
                <label>Enter Question</label>
                <input type="text" name="createdQuestion" value={this.props.createdQuestion} onChange={this.props.updateFormField}/>
            </div>
            <div>
                <ul>
                    <label>Option 1</label><input type="text" name="optionFirst" value={this.props.optionFirst} onChange={this.props.updateFormField}/>
                    <label>Option 2</label><input type="text" name="optionSecond" value={this.props.optionSecond} onChange={this.props.updateFormField}/>
                    <label>Option 3</label><input type="text" name="optionThird" value={this.props.optionThird} onChange={this.props.updateFormField}/>
                    <label>Option 4</label><input type="text" name="optionFourth" value={this.props.optionFourth} onChange={this.props.updateFormField}/>
                </ul>

                <label>Correct Answer</label><input type="text" name="correctAnswer" value={this.props.correctAnswer} onChange={this.props.updateFormField}/>
            </div>
            </div>
            
          
        </React.Fragment>
    }
}