

let friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]

    },
    {
      "name":"Magda",
      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
          2,
          1,
          5,
          4,
          5,
          5,
          2,
          5,
          5,
          1
        ]

  },
  {
    "name":"Ahmed2",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        2,
        5,
        2,
        5,
        3,
        5,
        5,
        4,
        3
      ]

},{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      2,
      5,
      5,
      5,
      2,
      2,
      5,
      1,
      1
    ]

},
{
"name":"Magda",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
    4,
    3,
    2,
    2,
    2,
    4,
    3,
    3,
    3,
    2
  ]

},
{
"name":"Ahmed2",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
  1,
  2,
  4,
  2,
  5,
  1,
  2,
  5,
  4,
  1
]

},{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]

},
{
"name":"Magda",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
    2,
    1,
    5,
    4,
    5,
    5,
    2,
    5,
    5,
    1
  ]

},
{
"name":"Ahmed2",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
  1,
  2,
  4,
  2,
  5,
  1,
  2,
  5,
  4,
  1
]

},
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]

},
{
"name":"Magda",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
    2,
    1,
    5,
    4,
    5,
    5,
    2,
    5,
    5,
    1
  ]

},
{
"name":"Ahmed2",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
  1,
  2,
  4,
  2,
  5,
  1,
  2,
  5,
  4,
  1
]

}
];

let repeater =0;
let newFriendScoreArray = friendsArray[friendsArray.length -1].scores;

 const compareFriends = function(){
  let diffArray = [];
  if(repeater < friendsArray.length){
    let oldFriends = friendsArray[repeater].scores;
      for(let i = 0; i < newFriendScoreArray.length; i++) {
      diffArray.push(Math.abs(newFriendScoreArray[i] - oldFriends[i]));
  }
  let diffSum = diffArray.reduce((a,b)=> a+b,0);
  friendsArray[repeater].diff = diffSum;

  
  }
  else{
    return;
  }
  repeater++;
  compareFriends();
};
  





module.exports = {friendsArray : friendsArray, func : compareFriends};

