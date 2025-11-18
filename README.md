📘 ECOEXPLORES – Plataforma Educacional
Projeto Integrador – Squad 3
CESAR School – 3º Período
📖 Descrição do Projeto

O ECOEXPLORES é uma plataforma educativa interativa desenvolvida para apoiar estudantes e professores na compreensão das ODS – Objetivos de Desenvolvimento Sustentável.

O sistema é dividido em:

Frontend (React) → interface visual

Backend (Node.js + Express) → APIs e regras de negócio

SQLite → banco de dados local

JWT → autenticação segura

Login com Google (OAuth 2.0)

🚀 Tecnologias Utilizadas
Frontend

React.js

React Router DOM

CSS3

React Icons

Backend

Node.js

Express

Passport Google OAuth2

JWT

SQLite3

Bcrypt

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

CPF/CNPJ

Senha criptografada (bcrypt)

JWT + Cookies HttpOnly

✔ Login com Google

Fluxo:

Clica no botão "Entrar com Google"

Redireciona para Google

Google retorna ao backend

Backend cria usuário (se não existir)

JWT é gerado e salvo em cookie

Frontend recebe sessão autenticada

🗄 Banco de Dados SQLite

Local:

backend/database/cadastro.sqlite


Tabelas principais:

empresas

funcionarios

representantes

filiais

users (OAuth Google)

Criar tudo automaticamente:

node src/seed.js

▶️ Como Rodar o Projeto
1. Backend

Instalar dependências:

cd backend
npm install


Rodar:

npm run dev


Seeder:

node src/seed.js


Servidor inicia em:
👉 http://localhost:4000

2. Frontend

Instalar dependências:

cd frontend
npm install


Rodar o projeto:

npm run dev


Aplicação:
👉 http://localhost:5173

🔧 Configuração do Google OAuth

Arquivo .env no backend:

GOOGLE_CLIENT_ID=SEU_ID
GOOGLE_CLIENT_SECRET=SEU_SECRET
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
FRONTEND_URL=http://localhost:5173
JWT_SECRET=sua_chave_muito_segura


Configuração no Google Cloud:

API: Google OAuth2

Tipo: Web application

URIs autorizadas:

http://localhost:4000/auth/google
http://localhost:4000/auth/google/callback

🧪 Testes
Login normal

Email: empresa@exemplo.com

Senha: senha123

Login Google

→ Clicar no botão Entrar com Google

👨‍💻 Equipe – Squad 3

Matheus José Cardoso Luna

Bruno Dornelas Costa Ciro da Penha

Rafael Farias Santana

Fábio Gomes dos Reis

📝 Licença

Projeto acadêmico — uso didático
