const Sequelize = require('sequelize');
let connection = new Sequelize('burgers_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    port: 8889
});

if (process.env.JAWSDB_URL) {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
    connection = new Sequelize(process.env.JAWSDB_URL, 'lsamhov467ikz38w', 'f6gj6em9uyqweo9m', {
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    })
} else {
    connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}
module.exports = connection;