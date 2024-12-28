import React from "react";
import styles from './Footer.css';

function Footer({ contacts }) {
    return (
        <div className="footer">
            <div className="Price-text">
                <p>НАШИ КОНТАКТЫ:</p>
                <p>Адрес: г. Москва, ул. Примерная д. 10</p>

                <p>Телефон:</p>
                <p>8 (999) 177-17-17</p>

                <p>Электронная почта:</p>
                <p>info@architecturecomfort.ru</p>

                <p>Часы работы:</p>
                <p>Пн - Пт: 10:00 - 19:00</p>
                <p>б: 10:00 - 16:00</p>
                <p>Вс: выходной</p>

            </div>
        </div>
    );
}

export default Footer;