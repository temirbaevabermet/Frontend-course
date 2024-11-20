import React, { useState } from 'react';
const PersonalInfo = () => {
    const [message, setMessage] = useState('');
    const [position, setPosition] = useState('Junior Back-end developer');
    const handleClick = () => {
        setMessage('Должность успешно изменена!');
        setPosition('Senior Back-end developer');
        
    };
    const person = {
        name: "Темирбаева Бермет",
        age: "25 лет",
        position: "Junior Back-end developer",
        company: "TechCompany",
        experience: "3 года",
        education: "Компьютерная инженерия",
    };
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Информация о человеке</h1>
            <p>Имя: {person.name}</p>
            <p>Возраст: {person.age}</p>
            <p>Должность: {position}</p>
            <p>Компания: {person.company}</p>
            <p>Опыт работы: {person.experience}</p>
            <p>Образование: {person.education}</p>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <button style={{ marginTop: '20px' }} onClick={handleClick}>
                Повысить в должности
            </button>
        </div>
    );
};

export default PersonalInfo;