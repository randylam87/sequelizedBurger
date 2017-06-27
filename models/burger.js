// const orm = require('../config/orm.js');
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
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});


// let burgers = {
//     all: (res)=> {
//         return Burger.findAll()
//     },

//     add: (cb) => {
//         Burger.create({
//             burgerName: burger
//         }).then(cb(res))
//     },

//     devour: (cb) => {
//         Burger.update({ devoured: 1 }, {
//             where: { id: burgerId }
//         }).then(cb(res))
//     }
// }

// let burgers = {
//     all: (cb) => {
//         orm.selectAll('burgers', (res) => {
//             cb(res);
//         })
//     },

//     add: (burger, cb) => {
//         orm.insertOne('burgers', 'burger_name', burger, (res) =>{
//             cb(res);
//         })
//     },

//     devour: (burgerId, cb) =>{
//         orm.updateOne('burgers', 'devoured', 1, 'id', burgerId, (res) => {
//             cb(res);
//         })
//     }
// }
//exports to burgers_controller.js
Burger.sync();

module.exports = Burger;