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
    connection = new Sequelize({use_env_variable: JAWSDB_URL, dialect: 'mysql' })
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