📘 ECOEXPLORES – Plataforma Educacional
Projeto Integrador – Squad 3 — CESAR School – 3º Período
📖 Descrição

ECOEXPLORES é uma plataforma educativa interativa para apoiar estudantes e professores na compreensão das ODS – Objetivos de Desenvolvimento Sustentável, com conteúdos lúdicos, trilhas educacionais e login via credenciais ou Google OAuth.

Componentes do Sistema

Frontend (React) – Interface do usuário

Backend (Node.js + Express) – APIs e regras de negócio

SQLite – Banco de dados local

JWT – Autenticação segura

Google OAuth 2.0 – Login social integrado

🚀 Tecnologias
Frontend

React.js

React Router DOM

CSS3

React Icons

Backend

Node.js

Express

Passport + Google OAuth 2.0

JWT

SQLite3

Bcrypt

Suporte

Postman / Thunder Client

Git & GitHub

Vite

📂 Estrutura
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
│   │   ├── middleware/errorHandler.js
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
✔ Login Tradicional

CNPJ/CPF

Senha criptografada (bcrypt)

Sessão via JWT + Cookie HttpOnly

✔ Login com Google

Fluxo:

Usuário clica em “Entrar com Google”

Google autoriza o login

Backend recebe /auth/google/callback

Cria usuário (se necessário)

Gera JWT

Envia sessão autenticada ao frontend

🗄 Banco SQLite

Local:

backend/database/cadastro.sqlite


Tabelas principais:

empresas

funcionarios

representantes

filiais

users (Google OAuth)

Criar banco/tabelas:

node src/seed.js

▶️ Como Rodar
🔧 Backend
cd backend
npm install
npm run dev
node src/seed.js


Servidor:

http://localhost:4000

💻 Frontend
cd frontend
npm install
npm run dev


Aplicação:

http://localhost:5173

🔧 Google OAuth

Arquivo .env no backend:

GOOGLE_CLIENT_ID=SEU_ID
GOOGLE_CLIENT_SECRET=SEU_SECRET
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
FRONTEND_URL=http://localhost:5173
JWT_SECRET=sua_chave_muito_segura


Configuração no Google Cloud:

API: Google OAuth2

App Type: Web

URIs autorizadas:

http://localhost:4000/auth/google

http://localhost:4000/auth/google/callback

🧪 Testes
Login normal

Email: empresa@exemplo.com
Senha: senha123

Login Google

→ Clique em Entrar com Google

👨‍💻 Equipe – Squad 3
Nome	Função
Matheus José Cardoso Luna
Bruno Dornelas Costa Ciro da Penha
Rafael Farias Santana
Fábio Gomes dos Reis
📝 Licença

Projeto acadêmico – livre para uso didático.
