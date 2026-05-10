import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('apps.db');
//const db = SQLite.openDatabaseSync('app.db');

export function criarTabelaMedicos() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS medicos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT not null,
      especialidade TEXT,
      crm TEXT,
      foto TEXT
      );
      `
  );
}

export function criarTabelaUsuarios(){
    db.execSync(`  
    CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf TEXT,
    rg TEXT, 
    dataNascimento TEXT
    );
    `
    );
    console.log(criarTabelaUsuarios);

}

export function inserirMedico(medico) {
  
  const result = db.runSync(
  
    `INSERT INTO medicos (nome, especialidade, crm, foto)
     VALUES (?, ?, ?, ?)`,
    [medico.nome, medico.especialidade, medico.crm, medico.foto]
  );

  console.log(result);
}

export function inserirUsuario(usuario) {
  
  const result = db.runSync(
  
    `INSERT INTO usuarios (nome, cpf, rg, dataNascimento)
     VALUES (?, ?, ?, ?)`,
    [usuario.nome, usuario.cpf, usuario.rg, usuario.dataNascimento]
  );
  
  console.log(result);

}
 

export function listarMedicos() {
  return db.getAllSync(
    `SELECT * FROM medicos`
  );
}

export function listarUsuarios(){
  return db.getAllSync(
    `SELECT * FROM usuarios`
  );
}

export function deletarMedico(id) {
  db.runSync(
    `DELETE FROM medicos WHERE id = ?`,
    [id]
  );
}

export function deletarUsuario(id) {
  db.runSync(
    `DELETE FROM usuarios WHERE id = ?`,
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

export function atualizarUsuario(usuario) {
  db.runSync(
    `UPDATE usuarios
     SET nome = ?, cpf = ?, rg = ?, dataNascimento = ?
     WHERE id = ?`,
    [
      usuario.nome,
      usuario.cpf,
      usuario.rg,
      usuario.dataNascimento,
      usuario.id
    ]
  );
}