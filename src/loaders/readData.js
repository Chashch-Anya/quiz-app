import { useEffect, useState } from 'react';

export function ReadData() {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/quiz.json'); // Убедиться, что файл доступен
    //             const jsonData = await response.json();
    //             setData(jsonData.quiz.categories);
    //         } catch (error) {
    //             console.error('Ошибка при загрузке данных:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        // Загрузка JSON файла
        fetch('/quiz.json')
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