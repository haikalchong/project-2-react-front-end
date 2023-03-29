// import React from 'react'

// const options=[]

// export function QuestionCard(props) {

  
//     return <React.Fragment>
//         <div className='d-flex flex-column mb-2'>
//             <label>Question</label>
//             <input type="text" className="form-control" name="createdQuestion" value={props.createdQuestion} onChange={props.updateFormField} />
//             {props.optionArr.map(
//                 (o,i) => {
//                     return (
                       
//                             <div key={i}>
//                             <label>Option</label>
//                             <input type="text" className="form-control mb-2 questionOptionName" name="optionValue" value={props.optionName} onChange={props.updateFormField} />
//                             <select onChange={props.onSelectChange} name="optionStatus" >
                           
//                                     <option value="true">Correct</option>
//                                     <option value="false">Incorrect</option>

                              
//                             </select>
//                             </div>



                       
//                     )
//                 }

//             )}
//             <button className="btn btn-primary btn-sm mb-3" onClick={props.addOption}>Add option</button>

//             <div className="d-flex flex-row justify-content-between">

//             </div>
//         </div>
//     </React.Fragment>




// }
