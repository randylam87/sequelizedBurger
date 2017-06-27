const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js');

router.get('/',(req,res)=>{
    burgers.findAll()
        .then((result)=>{
            console.log(result);
            res.render('index', { burger: result })
        });
});

router.post('/',(req,res)=>{
    let burger = req.body.burger;
    burgers.add(burger,(data)=>{
        // console.log(data);
        res.redirect('/');
    });
});

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    burgers.devour(id,(data)=>{
        // console.log(data);
        res.redirect('/');
    });
})
//exports to server.js
module.exports = router;