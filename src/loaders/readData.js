import { useEffect, useState } from 'react';

export function ReadData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Загрузка JSON файла
        fetch('/quiz-app/quiz.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data.quiz.categories);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);


    return data;
}