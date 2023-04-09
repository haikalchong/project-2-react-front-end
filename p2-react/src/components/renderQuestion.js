import React from 'react'


export function RenderQuestion(props) {
        if (props.questions.length === 0) {
            return <div>
                <h2>No questions added yet.</h2>
            </div>
        } else {
            return <div >
  <div className="card">
    
    {props.questions.map(
    (o,i)=>{
        return <div className="card-body" key={i}>
          <h5 className="card-title mb-3">{o.question}</h5>
            <ul className="list-group list-group-flush">
                {o.options.map(
                    (x,y)=>{
                        return <li className="list-group-item" key={y}>{x}</li>
                    }
                )}
                <p>Correct Answer: {o.correctAnswer}</p>
            </ul>
        </div>
    }
    )}

  </div>
</div>
            }
        }
    

