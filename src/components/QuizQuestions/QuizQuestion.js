import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './../Questions/Questions';
import './QuizQuestion.css';


const QuizQuestion = () => {
  const quizLoader = useLoaderData();
  const quizQuestion = quizLoader.data.questions;
    return (
        <div className='flex'>
            <div className='card-group'>
            {
                quizQuestion.map(quiz => <Questions quiz={quiz} key={quiz.id}></Questions>)
            }
            </div>
        </div>
    );
};

export default QuizQuestion;