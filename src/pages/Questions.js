import React, { useEffect, useState } from 'react';
import { ReadData } from '../loaders/readData'
import { useLocation } from 'react-router-dom';

function Questions() {
    const data = ReadData();
    const [questions, setQuestions] = useState([]);
    const [step, setStep] = useState(0);
    const [point, setPoint] = useState(0);

    const location = useLocation();
    const categoryId = location.state?.id;

    useEffect(() => {
        if (data.length > 0) {
            const category = data.find(item => item.id === categoryId);
            if (category) {
                setQuestions(category.questions);
            } else {
                setQuestions([]); // Если категории не найдено
            }
        }
    }, [data, categoryId]);

    const question = questions[step];

    const onClickOption = (id) => {
        if (id === question.correctOptionId) {
            setPoint(point + 1);
        }

        setStep(step + 1);
    }

    const progress = Math.round(step / questions.length * 100);

    return (
        <div className="App">
            <div className='game-area'>
                {
                    step !== questions.length ? (<Game progress={progress} question={question} onClickOption={onClickOption} />)
                        : (<Result point={point} questions={questions.length} />)
                }
            </div>
        </div>
    );
}

function Game({ progress, question, onClickOption }) {
    return (
        <>
            <div className="progress">
                <div style={{ width: `${progress}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.question}</h1>
            <ul>
                {
                    question.options.map((option) => (
                        <li onClick={() => onClickOption(option.id)} key={option.id}>{option.text}</li>
                    ))
                }
            </ul>
        </>
    );
}

function Result({ point, questions }) {
    const handleRefresh = () => {
        window.location.reload(); // Перезагрузка страницы
    };
    return (
        <div className="result">
            {/* <img src="https://banner2.cleanpng.com/20190828/lxj/transparent-candy-corn-5d6a459c56e4f8.1335432415672457243559.jpg" /> */}
            <h2>Вы отгадали {point} ответа из {questions}</h2>
            <a href='/quiz-app/#/QuizCategories'>
                <button>Выбор категории</button>
            </a>
            <button onClick={handleRefresh}>Попробовать снова</button>
        </div>
    );
}
export default Questions;
