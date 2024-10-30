import { Link } from 'react-router-dom';
import React from "react";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="quiz-title">
                    <h1 className="title">Halloween quiz</h1>
                </div>
                <div className="circle">
                    <Link to="/QuizCategories">Начать</Link>
                    <div className="eyes">
                        <div className="eye left"></div>
                        <div className="eye right"></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
