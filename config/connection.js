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
    connection = new Sequelize('hzrmqlqne32j7f4y', 'lsamhov467ikz38w', 'f6gj6em9uyqweo9m', {
        host: 'jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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