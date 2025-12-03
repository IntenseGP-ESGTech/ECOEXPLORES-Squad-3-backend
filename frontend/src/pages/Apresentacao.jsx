import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import styles from '../styles/Apresentacao.module.css';

import { FaPlay } from "react-icons/fa6";

export function Apresentacao() {
    return (
        <div className={styles.container}>
            <img 
                src={logo} 
                className={styles.logo}
                alt="Logo da aplicação" 
                aria-label="Logotipo"
            />

            <Link 
                to="/login" 
                className={styles.advanceButton}
                aria-label="Ir para página de login"
            >
                <FaPlay role="img" aria-label="Ícone de play" />
            </Link>
        </div>
    );
}
