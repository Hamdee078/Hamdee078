'use strict';

const express = require('express');
const crypto = require('crypto');
const wrRoute = express.Router();
const connection = require('../db');
wrRoute.post('/users',function(req,res, next){
    let mypass = crypto.createHash('md5').update(req,body.password).digest('hex');
    connection.execurte(`INSERT INTO users_tbl
        (id ,title,author ,published_year,genre,available,created_at,updated_at )
        VALUES (?,?,?,?,?,?,?,?);`,
        [req.body.id,req.body.title,req.body.author,req.body.published_year,req.body.genre,req.body.available,
         mypass,Dete.now(),Date.now()]).then(() => {
            console.log('ok');
            res.status(201).send("Imsert Successfully.");
         }).catch((err)=> {
            console.log(err);
            res.end();
         });
});
wrRoute.get('/student', function (req, res, next) {
    connection.execute('SELECT * FROM student;')
    .then((result) => {
            var rawData = result[0];
            res.send(JSON.stringify(rawData));
        }).catch((err) => {
            console.log(err);
            res.end();
        });
});
wrRoute.post('/check', function (req, res, next) {
    //let mypass = crypto.createHash('md5').update(req.body.password).digest("hex");

    connection.execute('SELECT * FROM student WHERE username=? AND id=?;',
    [req.body.username, req.body.id])
    .then((result) => {
        var data = result[0];
        console.log(data);
        if (data.length === 0) {
           res.sendStatus(200);
        } else {
           res.sendStatus(400);
        }
     }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
     });
 
 });
wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});

module.exports = wrRoute;
 