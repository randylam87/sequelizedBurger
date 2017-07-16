const Sequelize = require('sequelize');
let config    = require('./config.json')[env];


if (config.use_env_variable) {
  let connection = new Sequelize(process.env[config.use_env_variable]);
} else {
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
    }
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = connection;
