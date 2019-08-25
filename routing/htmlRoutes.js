const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes
module.exports = function(app){
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/survey',function(req,res){
    res.sendFile(path.join(__dirname,'../public/survey.html'));
});
};
