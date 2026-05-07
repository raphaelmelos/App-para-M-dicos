import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('app.db');

export function criarTabelaMedicos() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS medicos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      especialidade TEXT,
      crm TEXT,
      foto TEXT
    );
  `);
}

export function inserirMedico(medico) {
  db.runSync(
    `INSERT INTO medicos (nome, especialidade, crm, foto)
     VALUES (?, ?, ?, ?)`,
    [medico.nome, medico.especialidade, medico.crm, medico.foto]
  );
}

export function listarMedicos() {
  return db.getAllSync(
    `SELECT id, nome, especialidade, crm, foto FROM medicos`
  );
}

export function deletarMedico(id) {
  db.runSync(
    `DELETE FROM medicos WHERE id = ?`,
    [id]
  );
}

export function atualizarMedico(medico) {
  db.runSync(
    `UPDATE medicos
     SET nome = ?, especialidade = ?, crm = ?, foto = ?
     WHERE id = ?`,
    [
      medico.nome,
      medico.especialidade,
      medico.crm,
      medico.foto,
      medico.id
    ]
  );
}