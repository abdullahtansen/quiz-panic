import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import { PlayIcon } from '@heroicons/react/24/solid'


const Quiz = ({quiz}) => {
    const {name,logo,id} = quiz;
    
    const navigate = useNavigate();
    const handleShow = () =>{
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='quiz-container'>
           <img src={logo} alt="" />
          <div className='card-des'>
          <p>{name}</p>
           <button onClick={handleShow} className='quiz-btn'><PlayIcon className="play"/></button>
          </div>
        </div>
    );
};

export default Quiz;