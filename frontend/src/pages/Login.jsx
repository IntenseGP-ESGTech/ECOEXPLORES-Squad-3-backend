import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaGooglePlusG } from "react-icons/fa";

import logo from '../assets/logo.svg';

import styles from '../styles/Login.module.css';

export function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/precadastro');
    };

    return (
        <div className={styles.container} aria-label="Página de login">
            <img 
                src={logo} 
                className={styles.logo} 
                alt="Logo" 
                aria-label="Logo da aplicação"
            />

            <div className={styles.loginBox} role="main">
                <div className={styles.welcomeContainer}>
                    <h1 className={styles.welcomeTitle}>Seja Bem Vindo!</h1>
                    <p className={styles.welcomeSubtitle}>Bem-vindos a plataforma ao Banco de Especialistas</p>

                    <form 
                        onSubmit={handleLogin} 
                        className={styles.formContainer}
                        aria-label="Formulário de login"
                    >
                        <div className={styles.inputGroup}>
                            <FaUser className={styles.icon} aria-hidden="true" />
                            <input 
                                type="text" 
                                placeholder="CNPJ / CPF" 
                                required
                                aria-label="Insira seu CNPJ ou CPF"
                                aria-required="true"
                            />
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <FaLock className={styles.icon} aria-hidden="true" />
                            <input 
                                type="password" 
                                placeholder="senha" 
                                required
                                aria-label="Insira sua senha"
                                aria-required="true"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={styles.loginBtn}
                            aria-label="Efetuar login"
                        >
                            LOGIN
                        </button>
                    </form>

                    <div 
                        className={styles.forgotPassword}
                        role="button"
                        tabIndex={0}
                        aria-label="Recuperar senha"
                    >
                        Esqueceu a senha?
                    </div>
                    
                    <button 
                        onClick={handleRegister} 
                        className={styles.registerBtn}
                        aria-label="Ir para página de cadastro"
                    >
                        CADASTRE-SE
                    </button>
                    
                    <div 
                        className={styles.socialLogin}
                        aria-label="Opções de login social"
                    >
                        <p>Faça login com</p>
                        <FaGooglePlusG 
                            className={styles.googleIcon} 
                            aria-label="Login com Google"
                            role="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
