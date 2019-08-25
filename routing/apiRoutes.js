const express = require('express');
//var path = require('path');

const app = express();

const friends = require('../data/friends.js');
let bestMatch = {
     name: "",
     photo: "",
     ScoreDiff: 50
};

function bestFit(){
     return friends.friendsArray.reduce(function(min,p){
         p.diff < min ? p.diff :min,
        friends.friendsArray[0].diff;
        //bestMatch = {name: friends.friendsArray.name, photo: friends.friendsArray.photo, scoreDiff:friends.friendsArray.diff};
     });
    };

    



app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports = (app)=>{
//routes
    app.get('/api/friends',(req,res)=>{
    return res.json(friends);
    });

    app.post('/api/friends',(req,res)=>{
    let newFriend = req.body;
    for(let i =0; i< newFriend.scores.length;i++){
        let nowNum = parseInt(newFriend.scores[i]);
        newFriend.scores[i]=nowNum;
    };
    friends.friendsArray.push(newFriend);   
    friends.func();
    bestFit();
    res.json(bestMatch);
    
});
}
    