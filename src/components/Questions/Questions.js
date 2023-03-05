import React from "react";
import "./Question.css";
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ quiz }) => {
  const {question,options,correctAnswer} = quiz;
  console.log(quiz)

  const handleAnswerSelect = (option) => {
      if(option === correctAnswer){
        alert('Your Answer is Right')
      }else{
        alert('Your Answer is Wrong')
      }
    };

  const correctAnswers = () =>{
    alert(correctAnswer)
  }

  return (
    <div>
      <div>
           <div className='question-container'>
           <div className='d-grid'>
             <div className="Show">
              <div>
                <span className="icon" onClick={correctAnswers}>
             <EyeIcon className="eye"/>
              </span>
              </div>
              <div></div>
             </div>
           <h4>{question}</h4>
         {
            options.map(option =>
                <div className="btn">
                   <button onClick={ ()=> handleAnswerSelect(option)}>
                      {option}
                   </button>
                </div>
            )
           }
           </div>
        </div>
           </div>
    </div>
  );
};

export default Questions;
