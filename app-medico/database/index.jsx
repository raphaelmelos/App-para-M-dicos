import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('app.db');

export default db;

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