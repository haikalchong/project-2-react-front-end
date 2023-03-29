import React from 'react'


export function RenderQuestion(props) {
        if (props.questions.length === 0) {
            return <div>
                <h2>No questions added yet.</h2>
            </div>
        } else {
            return <div className="card" >
  <div className="card-body">
    
    {props.questions.map(
    (o,i)=>{
        return <div key={i}>
          <h5 className="card-title">{o.question}</h5>
            <ul>
                {o.options.map(
                    (x,y)=>{
                        return <li key={y}>{x}</li>
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
    

