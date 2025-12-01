/**
 * Página HomeOds com Sidebar que agora tem o botão "Trilhas"
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Ícones
import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

// Assets
import logo from '../assets/logo.svg';
import mundoDireita from '../assets/mundoDireita.svg';
import ods from '../assets/ods.svg';
import menuFoto from '../assets/menuFoto.svg';

// Componentes
import { Sidebar } from './Sidebar';

// Estilos
import styles from '../styles/HomeOds.module.css';

export function HomeOds() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  // Função que passa pro Sidebar para navegar (inclui /trilhas)
  const handleNavigate = (route) => {
    navigate(route);
    setMenuAberto(false); // fecha o menu ao clicar
  };

  const handleReturn = () => {
    navigate('/apresentacao');
  };

  return (
    <div className={styles.container}>
      {/* Sidebar com navegação para /trilhas */}
      {menuAberto && <Sidebar toggleMenu={toggleMenu} onNavigate={handleNavigate} />}

      <img src={logo} alt="Logo" className={styles.logo} />
      <img src={mundoDireita} alt="Mundo" className={styles.mundoDireita} />
      <img src={ods} alt="ODS" className={styles.ods} />

      {/* Ícones topo direito */}
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

      {/* Botão que abre o menu (avatar) */}
      <div
        className={styles.menuButton}
        onClick={toggleMenu}
        role="button"
        aria-label="Abrir menu lateral"
      >
        <img src={menuFoto} alt="Menu" className={styles.menuFoto} />
      </div>

      {/* Botão de voltar (já existia) */}
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