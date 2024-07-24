const express = require ('express');
const dotenv = require('dotenv');

const app = express;
dotenv.config;

const PORT = process.env.NODE_PORT || 3078;

app.use (express.json());
app.use (express.urlencoded({extended: true}));

const wrieRead = require ('./routes/writeRead');
const updateDelete = require ('./routes/updateDelete');

app.use('/wr',writeRead);
app.use('/ud',updateDelete);

app.use('/', function(req,res, next){
        res.sendStatue(404);
});
app.listen(PORT,() =>
   console.log('Server running on port : +PORT')
);
