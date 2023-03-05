import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizAll = useLoaderData();
    const quizS = quizAll.data;
    return (
        <div>
            <h4>This Is Quiz: {quizS.length}</h4>
           <div className='quizAll-container'>
           {
                quizS.map(quiz =><Quiz key={quiz} quiz={quiz}></Quiz>)
            }
           </div>
        </div>
    );
};

export default Home;