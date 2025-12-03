import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import mundoLogo from '../assets/mundoLogo.svg';
import mascote from '../assets/mascote.svg';

import styles from '../styles/CadastroAluno.module.css';

export function CadastroAluno() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 9) {
            value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/^(\d{3})(\d{3})$/, '$1.$2');
        }
        
        setCpf(value);
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
            <img src={mundoLogo} alt="Elemento decorativo" className={styles.mundoLogo} />
            <img src={mascote} alt="Mascote da plataforma" className={styles.mascote} />

            <div className={styles.loginBox}>
                <div className={styles.welcomeContainer}>
                    <h1 className={styles.welcomeTitle}>Seja Bem Vindo!</h1>
                    <p className={styles.welcomeSubtitle}>Crie sua conta, leva menos de um minuto!</p>

                    <form className={styles.formContainer} aria-label="Formulário de cadastro de aluno">
                        <div className={styles.inputGroup}>
                            <label htmlFor="nome">Aluno</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite seu nome completo"
                                className={styles.inputField}
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                value={cpf}
                                onChange={handleCpfChange}
                                placeholder="___.___.___-__"
                                className={styles.inputField}
                                maxLength={14}
                                aria-required="true"
                                aria-describedby="cpfHelp"
                            />
                            <small id="cpfHelp" className="sr-only">Formato: 000.000.000-00</small>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
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
                            <label htmlFor="matricula">Número da Matrícula</label>
                            <input 
                                type="text" 
                                id="matricula" 
                                value={matricula}
                                onChange={(e) => setMatricula(e.target.value)}
                                placeholder="Digite sua matrícula" 
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
