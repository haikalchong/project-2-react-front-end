import React from 'react'

export function QuestionCard(props) {
    return <React.Fragment>
        <div className='d-flex flex-column mb-2'>
            <label>Question</label>
            <input type="text" className="form-control" name="createdQuestion" value={props.createdQuestion} onChange={props.updateFormField} />
            <label>Option</label>
            <input type="text" className="form-control mb-2" name="optionValue" value={props.optionValue} onChange={props.updateFormField} />
            <input type="number" className="form-control" name="optionScore" value={props.optionScore} onChange={props.updateFormField} />
            <button className="btn btn-primary btn-sm" onClick={props.addOption}>Add option</button>
        </div>
    </React.Fragment>
}