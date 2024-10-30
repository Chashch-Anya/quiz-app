import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const QuizCategories = () => {
    const [categories, setCategories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Загрузка JSON файла
        fetch('/quiz.json')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.quiz.categories);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);

    return (
        <div className="App">
            <div className='App-container'>
                <div className='title'>
                    <h1>
                        Halloween quiz
                    </h1>
                </div>

                <div className='categories'>
                    <ul>
                        {categories.map((category) => (
                            <Link to={`${location.pathname}/${category.name}`} state={{ id: category.id }}><li key={category.id}>{category.name}</li></Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default QuizCategories;
