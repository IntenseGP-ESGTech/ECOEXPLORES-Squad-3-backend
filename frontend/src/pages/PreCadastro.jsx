import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';
import mundoLogo from '../assets/mundoLogo.svg';
import prancheta from '../assets/prancheta.svg';
import botaoEscola from '../assets/botaoEscola.svg';
import botaoProfessor from '../assets/botaoProfessor.svg';
import botaoResponsavel from '../assets/botaoResponsavel.svg';
import botaoAluno from '../assets/botaoAluno.svg';

import styles from '../styles/PreCadastro.module.css';

export function PreCadastro() {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div className={styles.container} aria-label="Página de seleção de categoria">
            <img 
                src={logo} 
                alt="Logo" 
                className={styles.logo} 
                aria-hidden="true"
            />
            <img 
                src={mundoLogo} 
                alt="Mundo Logo" 
                className={styles.mundoLogo} 
                aria-hidden="true"
            />
            <img 
                src={prancheta} 
                alt="Prancheta" 
                className={styles.prancheta} 
                aria-hidden="true"
            />

            <div className={styles.loginBox} role="main">
                <div className={styles.welcomeContainer}>
                    <h1 className={styles.welcomeTitle}>Agora Selecione sua categoria</h1>

                    <div 
                        className={styles.buttonGroup}
                        role="group"
                        aria-label="Opções de categoria de cadastro"
                    >
                        <button 
                            className={styles.categoryButton}
                            onClick={() => handleNavigation('/cadastro/escola')}
                            aria-label="Cadastro para escolas"
                        >
                            Escola
                        </button>

                        <button 
                            className={styles.categoryButton}
                            onClick={() => handleNavigation('/cadastro/professor')}
                            aria-label="Cadastro para professores"
                        >
                            Professor
                        </button>

                        <button 
                            className={styles.categoryButton}
                            onClick={() => handleNavigation('/cadastro/responsavel')}
                            aria-label="Cadastro para responsáveis"
                        >
                            Responsável
                        </button>

                        <button 
                            className={styles.categoryButton}
                            onClick={() => handleNavigation('/cadastro/aluno')}
                            aria-label="Cadastro para alunos"
                        >
                            Aluno
                        </button>
                    </div>

                    <button
                        onClick={() => handleNavigation('/login')}
                        className={styles.continueButton}
                        aria-label="Voltar para página de login"
                    >
                        Voltar para Login
                    </button>
                </div>
            </div>
        </div>
    );
}
