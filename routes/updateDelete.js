'use strict';
const express = require('express');
const udRoute = express.Router();
const connection = require('../db');

udRoute.put('/users/:uid',function(req,res,next){
    connection.execute("UPDATE Users_tbl SET id =?,uodate_at=?;",
        [req.body.id,req.body.title,new Data(),req.params.uid])
        .then(()=>{
            console.log('ok');
        }).catch((err)=> {
            console.log(err);
        });
        res.status(200).send("Updatr");
});

udRoute.delete('/users/:uid',function(req,res,next){
    connection.execute("DELETE FROM Users_tbl WHERE id=?;",
        [req.params.uid]
    ).then(() => {
        console.log('ok');
    }).catch((err)=> {
        console.log(err);
    });
    res.end();
});



