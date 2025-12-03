import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

import logo from '../assets/logo.svg';
import mundoDireita from '../assets/mundoDireita.svg';
import ods from '../assets/ods.svg';
import menuFoto from '../assets/menuFoto.svg';

import { Sidebar } from './Sidebar';

import styles from '../styles/Home.module.css';

export function Home() {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    const handleReturn = () => {
        navigate('/apresentacao');
    };

    const toggleMenu = useCallback(() => {
        setMenuAberto((prev) => !prev);
    }, []);

    const handleNavigateFromSidebar = useCallback((route) => {
        setMenuAberto(false);
        navigate(route);
    }, [navigate]);

    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="Logotipo da Aplicação" aria-label="Logotipo da Aplicação" />
            <img
                src={menuFoto}
                className={`${styles.menuFotoToggle} ${menuAberto ? styles.menuFotoHidden : ''}`}
                alt="Abrir ou Fechar Menu"
                onClick={toggleMenu}
                role="button"
                aria-label={menuAberto ? "Fechar Menu" : "Abrir Menu"}
            />
            <div className={`${styles.sidebarWrapper} ${menuAberto ? styles.sidebarOpen : ''}`}>
                <Sidebar
                    toggleMenu={toggleMenu}
                    onNavigate={handleNavigateFromSidebar}
                />
            </div>
            <img src={mundoDireita} className={styles.mundoDireita} alt="Ilustração de um Globo Terrestre" aria-label="Ilustração de um Globo Terrestre" />
            <img src={ods} className={styles.ods} alt="Ícone dos Objetivos de Desenvolvimento Sustentável" aria-label="Ícone dos ODS" />
            <div className={styles.topRightIcons}>
                <div className={styles.playIcon} onClick={() => navigate('/HomeOds')} role="button" aria-label="Reproduzir Conteúdo">
                    <FaPlay size={24} />
                </div>
                <div className={styles.peopleIcon} role="button" aria-label="Perfis de Usuários">
                    <MdEmojiPeople size={24} />
                </div>
                <div className={styles.notificationIcon} role="button" aria-label="Notificações">
                    <IoIosNotifications size={24} />
                </div>
                <div className={styles.emailIcon} role="button" aria-label="Mensagens">
                    <MdEmail size={24} />
                </div>
            </div>

            <div
                className={styles.returnButton}
                onClick={handleReturn}
                role="button"
                aria-label="Retornar para a apresentação"
                tabIndex={0}
            >
                <IoMdReturnLeft className={styles.returnIcon} />
            </div>
        </div>
    );
}
