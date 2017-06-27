const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js');

router.get('/', (req, res) => {
    burgers.findAll()
        .then((result) => {
            let burgerObject = {
                burgers: result
            };
            res.render('index', burgerObject);
        });
});

router.post('/', (req, res) => {
    let burger = req.body.burger;
    burgers.create({
            burgerName: burger
        })
        .then(() => {
            res.redirect('/');
        });
});

router.put('/:id', (req, res) => {
    let burgerId = req.params.id;
    let burgerDevourer = req.body.devouredBy;
    burgers.update({
            devoured: true,
            devouredBy: burgerDevourer
        }, {
            where: {
                id: burgerId
            }
        })
        .then(() => {
            res.redirect('/');
        });
});

//exports to server.js
module.exports = router;