import React from 'react';
import styles from '../styles/Sidebar.module.css';

// Assets dos ícones do menu
import avatar from '../assets/avatar.svg';
import calendario from '../assets/agenda.svg';
import configuracoes from '../assets/config.svg';
import documento from '../assets/doc.svg';
import email from '../assets/email.svg';
import mundoSide from '../assets/mundoSide.svg';

export function Sidebar({ toggleMenu, onNavigate }) {
  return (
    <div className={styles.sidebar}>
      {/* 1 - Avatar (fecha o menu) */}
      <div
        className={styles.menuItem}
        onClick={toggleMenu}
        role="button"
        aria-label="Fechar Menu"
      >
        <img src={avatar} alt="Perfil" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>

      {/* 2 - Calendário */}
      <div className={styles.menuItem} role="button" aria-label="Calendário">
        <img src={calendario} alt="Calendário" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>

      {/* 3 - Configurações */}
      <div className={styles.menuItem} role="button" aria-label="Configurações">
        <img src={configuracoes} alt="Configurações" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>

      {/* 4 - Documentos */}
      <div className={styles.menuItem} role="button" aria-label="Documentos">
        <img src={documento} alt="Documentos" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>

      {/* 5 - E-mail */}
      <div className={styles.menuItem} role="button" aria-label="E-mail">
        <img src={email} alt="E-mail" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>

      {/* NOVO ITEM: TRILHAS */}
      <div
        className={styles.menuItem}
        onClick={() => onNavigate('/trilhas')}
        role="button"
        aria-label="Gerenciar Trilhas de Aprendizado"
      >
        <img src={documento} alt="Trilhas" className={styles.menuIcon} />
        <span className={styles.menuText}>TRILHAS</span>
      </div>

      {/* 6 - Mundo (já existia) */}
      <div
        className={styles.menuItem}
        onClick={() => onNavigate('/HomeOds')}
        role="button"
        aria-label="Ir para Home ODS"
      >
        <img src={mundoSide} alt="Global" className={styles.menuIcon} />
        <span className={styles.menuText}>MENU</span>
      </div>
    </div>
  );
}