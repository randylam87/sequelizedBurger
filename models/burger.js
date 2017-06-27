const connection = require('../config/connection.js');
const Sequelize = require('sequelize');

const Burger = connection.define('burgers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burgerName: Sequelize.STRING,
    devoured: {
        type: Sequelize.BOOLEAN,
        default: 0
    },
    devouredBy: {
        type: Sequelize.STRING,
        default: null
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

Burger.sync({
        force: true
    })
    .then(() => Burger.create({
        burgerName: 'Big Mac'
    }))
    .then(() => Burger.create({
        burgerName: 'Krabby Patty'
    }))
    .then(() => Burger.create({
        burgerName: 'Whopper'
    }));


module.exports = Burger;