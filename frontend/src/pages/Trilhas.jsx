import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import mundoLogo from '../assets/mundoLogo.svg';
import mascote from '../assets/mascote.svg';
import styles from '../styles/Trilhas.module.css';

export function Trilhas() {
  const navigate = useNavigate();
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTrail, setEditingTrail] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [modules, setModules] = useState([{ title: '', content: '', order: 1 }]);

  const loadTrails = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/trails');
      const data = await res.json();
      setTrails(data);
    } catch (err) {
      alert('Erro ao carregar trilhas. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrails();
  }, []);

  const addModule = () => {
    setModules([...modules, { title: '', content: '', order: modules.length + 1 }]);
  };

  const removeModule = (index) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  const updateModule = (index, field, value) => {
    const newModules = [...modules];
    newModules[index][field] = value;
    newModules[index].order = index + 1;
    setModules(newModules);
  };

  const handleSave = async () => {
    if (!name.trim()) return alert('Nome da trilha é obrigatório!');

    const payload = {
      name: name.trim(),
      description: description.trim() || null,
      modules: modules
        .filter(m => m.title.trim())
        .map(m => ({ title: m.title, content: m.content || null }))
    };

    try {
      const url = editingTrail
        ? `http://localhost:5000/api/trails/${editingTrail.id}`
        : 'http://localhost:5000/api/trails';

      const method = editingTrail ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      resetForm();
      loadTrails();
    } catch (err) {
      alert('Erro ao salvar trilha');
    }
  };

  const handleEdit = (trail) => {
    setEditingTrail(trail);
    setName(trail.name);
    setDescription(trail.description || '');
    setModules(
      trail.modules.length > 0
        ? trail.modules.map((m, i) => ({ ...m, order: i + 1 }))
        : [{ title: '', content: '', order: 1 }]
    );
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que quer deletar esta trilha?')) return;

    try {
      await fetch(`http://localhost:5000/api/trails/${id}`, { method: 'DELETE' });
      loadTrails();
    } catch (err) {
      alert('Erro ao deletar');
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setModules([{ title: '', content: '', order: 1 }]);
    setEditingTrail(null);
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <img src={mundoLogo} alt="Mundo Logo" className={styles.mundoLogo} />
      <img src={mascote} alt="Mascote" className={styles.mascote} />

      <button onClick={() => navigate('/home')} className={styles.backButton}>
        VOLTAR
      </button>

      <div className={styles.contentBox}>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Trilhas de Aprendizado</h1>

          <button onClick={() => setShowForm(true)} className={styles.continueButton}>
            + Nova Trilha
          </button>

          {showForm && (
            <form className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nome da Trilha *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite o nome da trilha"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="description">Descrição (opcional)</label>
                <textarea
                  id="description"
                  placeholder="Descreva a trilha"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                />
              </div>

              <div className={styles.modulesSection}>
                <h3>Módulos</h3>
                {modules.map((mod, index) => (
                  <div key={index} className={styles.moduleItem}>
                    <div className={styles.inputGroup}>
                      <label htmlFor={`title-${index}`}>Título do módulo {index + 1} *</label>
                      <input
                        id={`title-${index}`}
                        type="text"
                        placeholder={`Título do módulo`}
                        value={mod.title}
                        onChange={(e) => updateModule(index, 'title', e.target.value)}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor={`content-${index}`}>Conteúdo (opcional)</label>
                      <textarea
                        id={`content-${index}`}
                        placeholder="Conteúdo do módulo"
                        value={mod.content}
                        onChange={(e) => updateModule(index, 'content', e.target.value)}
                        rows="2"
                      />
                    </div>
                    {modules.length > 1 && (
                      <button type="button" onClick={() => removeModule(index)} className={styles.removeModule}>
                        Remover
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addModule} className={styles.addModule}>
                  + Adicionar Módulo
                </button>
              </div>

              <div className={styles.buttonGroup}>
                <button type="button" onClick={handleSave} className={styles.continueButton}>
                  {editingTrail ? 'Salvar Alterações' : 'Criar Trilha'}
                </button>
                <button type="button" onClick={resetForm} className={styles.continueButton}>
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {loading ? (
            <p>Carregando trilhas...</p>
          ) : trails.length === 0 ? (
            <p>Nenhuma trilha criada ainda. Clique em "Nova Trilha" para começar!</p>
          ) : (
            <div className={styles.trailsGrid}>
              {trails.map((trail) => (
                <div key={trail.id} className={styles.trailCard}>
                  <h3>{trail.name}</h3>
                  {trail.description && <p className={styles.description}>{trail.description}</p>}
                  <div className={styles.modules}>
                    <strong>{trail.modules.length} módulo(s)</strong>
                    <ul>
                      {trail.modules.map((m) => (
                        <li key={m.id}>{m.title}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button onClick={() => handleEdit(trail)} className={styles.continueButton}>
                      Editar
                    </button>
                    <button onClick={() => handleDelete(trail.id)} className={styles.deleteButton}>
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
