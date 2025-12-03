import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'sqlite3';                
const { Database } = pkg;                  

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Banco SQLite
const db = new Database('trilhas.db', (err) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite (trilhas.db)');
  }
});

// Cria as tabelas se não existirem
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS trails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT,
      orderNum INTEGER NOT NULL,
      trailId INTEGER,
      FOREIGN KEY (trailId) REFERENCES trails(id) ON DELETE CASCADE
    )
  `);
});

// ==================== ROTAS CRUD DE TRILHAS ====================

// 1. Listar todas as trilhas com módulos
app.get('/api/trails', (req, res) => {
  db.all(`SELECT * FROM trails ORDER BY createdAt DESC`, [], (err, trails) => {
    if (err) return res.status(500).json({ error: err.message });

    const promises = trails.map(trail => {
      return new Promise((resolve) => {
        db.all(`SELECT * FROM modules WHERE trailId = ? ORDER BY orderNum`, [trail.id], (err, modules) => {
          resolve({ ...trail, modules: modules || [] });
        });
      });
    });

    Promise.all(promises)
      .then(trailsWithModules => res.json(trailsWithModules))
      .catch(err => res.status(500).json({ error: err.message }));
  });
});

// 2. Buscar uma trilha específica
app.get('/api/trails/:id', (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM trails WHERE id = ?`, [id], (err, trail) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!trail) return res.status(404).json({ message: 'Trilha não encontrada' });

    db.all(`SELECT * FROM modules WHERE trailId = ? ORDER BY orderNum`, [id], (err, modules) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ ...trail, modules: modules || [] });
    });
  });
});

// 3. Criar nova trilha
app.post('/api/trails', (req, res) => {
  const { name, description, modules = [] } = req.body;
  if (!name) return res.status(400).json({ error: 'Nome da trilha é obrigatório' });

  db.run(
    `INSERT INTO trails (name, description) VALUES (?, ?)`,
    [name, description || null],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      const trailId = this.lastID;

      if (modules.length > 0) {
        const stmt = db.prepare(`INSERT INTO modules (title, content, orderNum, trailId) VALUES (?, ?, ?, ?)`);
        modules.forEach((mod, i) => {
          stmt.run(mod.title || 'Módulo sem título', mod.content || null, i + 1, trailId);
        });
        stmt.finalize(() => res.status(201).json({ id: trailId, name, description, modules }));
      } else {
        res.status(201).json({ id: trailId, name, description, modules: [] });
      }
    }
  );
});

// 4. Atualizar trilha (substitui tudo)
app.put('/api/trails/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, modules = [] } = req.body;

  db.run(
    `UPDATE trails SET name = ?, description = ? WHERE id = ?`,
    [name, description || null, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ message: 'Trilha não encontrada' });

      db.run(`DELETE FROM modules WHERE trailId = ?`, [id], () => {
        if (modules.length > 0) {
          const stmt = db.prepare(`INSERT INTO modules (title, content, orderNum, trailId) VALUES (?, ?, ?, ?)`);
          modules.forEach((mod, i) => {
            stmt.run(mod.title || 'Módulo sem título', mod.content || null, i + 1, id);
          });
          stmt.finalize(() => res.json({ id: Number(id), name, description, modules }));
        } else {
          res.json({ id: Number(id), name, description, modules: [] });
        }
      });
    }
  );
});

// 5. Deletar trilha
app.delete('/api/trails/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM trails WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Trilha não encontrada' });
    res.json({ message: 'Trilha deletada com sucesso' });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
  console.log(`Teste rápido: http://localhost:${PORT}/api/trails`);
});