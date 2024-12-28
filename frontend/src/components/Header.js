import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import styles from './Header.css';

function Header() {
    const token = localStorage.getItem("token");
    let userRole = [];

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            userRole = decodedToken.roles || [];
        } catch (error) {
            console.error("Ошибка декодирования токена:", error);

        }
    }

    return (
        <div className="Header"> 
            <Link to="/"> Главная </Link>
            <Link to="/page1"> О Нас </Link>
            <Link to="/page2"> Услуги </Link>
            <Link to="/page3"> Контакты </Link>
            <Link to="/Calculator"> Калькулятор</Link>
            {!token && (
                <>

                </>
            )}
        </div>
    );
}

export default Header;