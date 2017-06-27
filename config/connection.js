// const mysql = require('mysql');
const Sequelize = require('sequelize');
const connection = new Sequelize('burgers_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
// connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burgers_db",
//     port: 8889
// });
// }

// connection.connect((err) => {
//     if (err) {
//         console.error(`Error connecting: ${err.stack}`);
//         return;
//     }
//     console.log(`Connected as id: ${connection.threadId}`)
// });

connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = connection;