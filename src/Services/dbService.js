// import Database from 'better-sqlite3';
// // const Database = require('better-sqlite3');
// import path from 'path';
//
//
// const db = new Database(__dirname + '/src/Db/pos.db', { verbose: console.log });
//
// export const getCategories = () => {
//   const stm = db.prepare('SELECT * FROM Category');
//   return stm.all();
// }
//
// export function connect() {
//   return Database(
//     path.join(__dirname, '../../../', 'release/app', 'database.db'),
//     { verbose: console.log, fileMustExist: true },
//   );
// }
//
// export function insertCategory(todo) {
//   const db = connect();
//   const stm = db.prepare(
//     'INSERT INTO todos (title, date, status) VALUES (@title, @date, @status)',
//   );
//
//   stm.run(todo);
// }
//
// export function updateTODO(todo) {
//   const db = connect();
//   const { title, status, id } = todo;
//
//   const stm = db.prepare(
//     'UPDATE todos SET title = @title, status = @status WHERE id = @id',
//   );
//
//   stm.run({ title, status, id });
// }
//
// export function deleteTODO(id) {
//   const db = connect();
//
//   const stm = db.prepare('DELETE FROM todos WHERE id = @id');
//
//   stm.run({ id });
// }
//
// export function getAllTODO() {
//   const db = connect();
//
//   const stm = db.prepare('SELECT * FROM todos');
//
//   return stm.all();
// }
//
// export function getOneTODO(id) {
//   const db = connect();
//
//   const stm = db.prepare('SELECT * FROM todos where id = @id');
//
//   return stm.get({ id });
// }