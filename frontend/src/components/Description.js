import React, { useState, useEffect } from 'react';
import styles from './Description.css';

function Description () {
    const [description, setDescription] = useState([]);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const api = 'http://localhost:5000/getposts'; 
                const response = await fetch(api);
        
                if (!response.ok) {
                  throw new Error('Ошибка при получении данных');
                }
                const data = await response.json();
                setDescription(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []); 

    return (
        <div>
          <h2>Красткое описание Компании и наша миссия:</h2>
          <p>Миссия компании "Атмосфера комфорта" заключается в создании комфортных и безопасных пространств для жизни и работы, где каждый клиент чувствует заботу и внимание к своим потребностям.</p>
          <p>Ценности компании включают: высокое качество услуг, индивидуальный подход к каждому клиенту, инновации в строительстве, устойчивое развитие и заботу об экологии.</p>

          <h3>Основные ценности:</h3>

          <p>"Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! С самого начала команда проявила высокий уровень профессионализма и внимательности к нашим пожеланиям. Проект был разработан быстро и с учетом всех наших требований. Строительство прошло в срок, а качество работ превзошло наши ожидания. Теперь у нас есть уютный дом, в котором мы счастливо живем. Рекомендуем всем!"</p>
          <p>Качество: Мы стремимся предоставлять услуги наивысшего качества, используя только лучшие материалы и технологии.</p>
          <p>Индивидуальный подход: Каждый проект уникален, и мы учитываем все пожелания и требования наших клиентов.</p>
          <p>Инновации: Мы постоянно ищем новые решения и технологии, чтобы улучшить наши услуги и повысить эффективность работы.</p>
          <p>Устойчивое развитие: Мы заботимся о будущем планеты, используя экологически чистые материалы и практики.</p>
          <p>Командная работа: Мы верим в силу команды и ценим вклад каждого сотрудника, создавая атмосферу сотрудничества и поддержки.</p>

          <ul>
            {description.map(post => (
            <li key={post.id}>
                {post.title} - {post.text}
            </li>
            ))}
      </ul>
        </div>
      );
}

export default Description;