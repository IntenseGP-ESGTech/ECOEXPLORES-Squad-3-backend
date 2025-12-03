import React, { useState } from "react";
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

import styles from '../styles/HomeOds.module.css';

export function HomeOds() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const handleNavigate = (route) => {
    navigate(route);
    setMenuAberto(false);
  };

  const handleReturn = () => {
    navigate('/apresentacao');
  };

  return (
    <div className={styles.container}>
      {menuAberto && <Sidebar toggleMenu={toggleMenu} onNavigate={handleNavigate} />}

      <img src={logo} alt="Logo" className={styles.logo} />
      <img src={mundoDireita} alt="Mundo" className={styles.mundoDireita} />
      <img src={ods} alt="ODS" className={styles.ods} />

      <div className={styles.topRightIcons}>
        <div className={styles.playIcon} role="button">
          <FaPlay size={24} />
        </div>
        <div className={styles.peopleIcon} role="button">
          <MdEmojiPeople size={24} />
        </div>
        <div className={styles.notificationIcon} role="button">
          <IoIosNotifications size={24} />
        </div>
        <div className={styles.emailIcon} role="button">
          <MdEmail size={24} />
        </div>
      </div>

      <div
        className={styles.menuButton}
        onClick={toggleMenu}
        role="button"
        aria-label="Abrir menu lateral"
      >
        <img src={menuFoto} alt="Menu" className={styles.menuFoto} />
      </div>

      <div
        className={styles.returnButton}
        onClick={handleReturn}
        role="button"
        aria-label="Retornar para apresentação"
      >
        <IoMdReturnLeft className={styles.returnIcon} />
      </div>
    </div>
  );
}
