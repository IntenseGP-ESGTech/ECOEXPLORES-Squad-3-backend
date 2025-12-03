import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import mundoLogo from '../assets/mundoLogo.svg';
import mundoBaixo from '../assets/mundoBaixo.svg';

import styles from '../styles/CadastroEscola.module.css';

export function CadastroEscola() {
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleCnpjChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 12) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
        } else if (value.length > 8) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/, '$1.$2.$3/$4');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2.$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{3})$/, '$1.$2');
        }
        
        setCnpj(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const handleVoltar = (e) => {
        e.preventDefault();
        navigate('/precadastro');
    };

    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo da plataforma" className={styles.logo} />
            <img src={mundoLogo} alt="Elemento decorativo superior" className={styles.mundoLogo} />
            <img src={mundoBaixo} alt="Elemento decorativo inferior" className={styles.mundoBaixo} />

            <div className={styles.loginBox}>
                <div className={styles.welcomeContainer}>
                    <h1 className={styles.welcomeTitle}>Seja Bem Vindo!</h1>
                    <p className={styles.welcomeSubtitle}>Crie sua conta, leva menos de um minuto!</p>

                    <form className={styles.formContainer} aria-label="Formulário de cadastro institucional">
                        <div className={styles.inputGroup}>
                            <label htmlFor="cnpj">CNPJ</label>
                            <input
                                type="text"
                                id="cnpj"
                                value={cnpj}
                                onChange={handleCnpjChange}
                                placeholder="__.___.___/____-__"
                                className={styles.inputField}
                                maxLength={18}
                                aria-required="true"
                                aria-describedby="cnpjHelp"
                            />
                            <small id="cnpjHelp" className="sr-only">Formato: 00.000.000/0000-00</small>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail Corporativo</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite o e-mail corporativo" 
                                className={styles.inputField}
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="instituicao">Nome da Instituição</label>
                            <input 
                                type="text" 
                                id="instituicao" 
                                value={instituicao}
                                onChange={(e) => setInstituicao(e.target.value)}
                                placeholder="Digite o nome da instituição" 
                                className={styles.inputField}
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="senha">Defina sua Senha</label>
                            <input 
                                type="password" 
                                id="senha" 
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Crie uma senha segura" 
                                className={styles.inputField}
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.buttonGroup}>
                            <button 
                                type="submit" 
                                className={styles.continueButton} 
                                onClick={handleSubmit}
                                aria-label="Continuar para login"
                            >
                                CONTINUAR
                            </button>
                            <button 
                                type="button" 
                                className={styles.continueButton} 
                                onClick={handleVoltar}
                                aria-label="Voltar para seleção de cadastro"
                            >
                                VOLTAR
                            </button>
                        </div>
                    </form>

                    <div className={styles.socialLogin} aria-label="Opções de login social">
                        <p>Faça login com</p>
                        <FaGoogle 
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
