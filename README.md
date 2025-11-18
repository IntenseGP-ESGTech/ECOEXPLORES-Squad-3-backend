📘 ECOEXPLORES – Plataforma Educacional
Projeto Integrador – Squad 3
CESAR School – 3º Período
📖 Descrição do Projeto

O ECOEXPLORES é uma plataforma educativa interativa desenvolvida para apoiar estudantes e professores na compreensão das ODS – Objetivos de Desenvolvimento Sustentável.
A aplicação apresenta conteúdos lúdicos, área do usuário, trilhas educacionais e autenticação via credenciais ou Google Login (OAuth 2.0).

O sistema é dividido em:

Frontend (React) → interface visual do usuário

Backend (Node.js + Express) → APIs, regras de negócio

Banco de Dados SQLite → armazenamento simples, leve e local

Autenticação JWT → login seguro

Login Social Google → integração oficial via Google OAuth

🚀 Tecnologias Utilizadas
Frontend

React.js

React Router DOM

CSS3

React Icons

Backend

Node.js

Express.js

Passport + Google OAuth 2.0

JWT (Json Web Token)

SQLite3

Bcrypt

Ferramentas de Apoio

Postman / Thunder Client

Git & GitHub

Vite (ambiente de execução do React)

📂 Estrutura do Projeto
ECOEXPLORES/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── passportGoogle.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── register.js
│   │   │   ├── googleAuth.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   ├── seed.js
│   ├── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── assets/
    │   ├── components/
    │   ├── App.jsx
    ├── package.json

🔐 Autenticação
✔ Login tradicional

Baseado em:

CNPJ/CPF

Senha criptografada (bcrypt)

Sessão via JWT + Cookies HttpOnly

✔ Login com Google

Fluxo completo:

Usuário clica em “Entrar com Google”

Redireciona para a página oficial do Google

Google retorna para o backend (/auth/google/callback)

Backend cria registro (se não existir)

Backend gera JWT e salva em cookie

Frontend recebe sessão autenticada

🗄 Banco de Dados SQLite

O arquivo fica em:

backend/database/cadastro.sqlite


Tabelas principais:

Tabela	Finalidade
empresas	CNPJ, email e senha
funcionarios	login de funcionários
representantes	usuários representantes
filiais	cadastros secundários
users	Login com Google OAuth

O script para criar tudo automaticamente:

node src/seed.js

▶️ Como Rodar o Projeto
🔧 1. Backend
Instalar dependências
cd backend
npm install

Rodar o backend
npm run dev

Gerar banco e tabelas:
node src/seed.js


O servidor inicia em:

http://localhost:4000

💻 2. Frontend
Instalar dependências
cd frontend
npm install

Rodar o frontend
npm run dev


O sistema abre em:

http://localhost:5173

🔧 Configuração do Google OAuth

Crie um arquivo .env dentro do backend:

GOOGLE_CLIENT_ID=SEU_ID
GOOGLE_CLIENT_SECRET=SEU_SECRET
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
FRONTEND_URL=http://localhost:5173
JWT_SECRET=sua_chave_muito_segura


Ativar no Google Cloud:

Biblioteca: Google OAuth2

Tipo: Web Application

Autorizado:

http://localhost:4000/auth/google

http://localhost:4000/auth/google/callback

🧪 Testes

Para testar login:

Login normal:

empresa@exemplo.com

Senha: senha123

Login Google:

Clique no botão “Entrar com Google”

👨‍💻 Equipe – Squad 3
Nome	Função
Matheus José Cardoso Luna
Bruno Dornelas Costa Ciro da Penha
Rafael Farias Santana
Fábio Gomes dos Reis

📝 Licença

Projeto acadêmico — não possui restrições de uso.

🔚 Conclusão

Este projeto apresenta uma plataforma educacional moderna, responsiva e segura, integrando:

✔ React Interface
✔ Backend com Express
✔ Banco SQLite
✔ Autenticação JWT
✔ Login com Google
