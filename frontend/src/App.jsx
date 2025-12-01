import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// === PÁGINAS DO SEU PROJETO ===
import { Apresentacao } from './pages/Apresentacao';
import { PreCadastro } from './pages/PreCadastro';
import { CadastroProfessor } from './pages/CadastroProfessor';
import { CadastroResponsavel } from './pages/CadastroResponsavel';
import { CadastroAluno } from './pages/CadastroAluno';
import { CadastroEscola } from './pages/CadastroEscola';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { HomeOds } from './pages/HomeOds';

// === PÁGINA NOVA DE TRILHAS (ESSA É A QUE FALTAVA) ===
import { Trilhas } from './pages/Trilhas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/precadastro" element={<PreCadastro />} />
        <Route path="/cadastro-professor" element={<CadastroProfessor />} />
        <Route path="/cadastro-responsavel" element={<CadastroResponsavel />} />
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />
        <Route path="/cadastro-escola" element={<CadastroEscola />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeods" element={<HomeOds />} />

        {/* ROTA NOVA – TRILHAS */}
        <Route path="/trilhas" element={<Trilhas />} />
      </Routes>
    </Router>
  );
}

export default App;