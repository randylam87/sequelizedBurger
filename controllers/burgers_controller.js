let express = require("express");
let router = express.Router();
let db = require("../models");

router.get('/', (req, res) => {
    db.Burger.findAll()
        .then((result) => {
            let burgerObject = {
                burgers: result
            };
            res.render('index', burgerObject);
        });
});

router.post('/', (req, res) => {
    let burger = req.body.burger;
    db.Burger.create({
            burgerName: burger
        })
        .then(() => {
            res.redirect('/');
        });
});

router.put('/:id', (req, res) => {
    let burgerId = req.params.id;
    let burgerDevourer = req.body.devouredBy;
    db.Burger.update({
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