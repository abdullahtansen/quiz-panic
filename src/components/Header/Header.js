import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav>
               <div>
                <h1>Quiz Panic</h1>
                </div>
               <div className='nav'>
               <Link to="/">Home</Link>
                <Link to="/statics">Statics</Link>
                <Link to="/blog">Blog</Link>
               </div>
            </nav>
        </div>
    );
};

export default Header;