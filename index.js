var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName + " Do You Know Musharraf? ");

var highScores=[
  {
    name: "Maxx",
    score: 4,
  },
   {
    name: "boss",
    score: 3,
  },

]

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer=== answer)
  {
    console.log("Right");
    score= score +1;
  }
  else{
    console.log("Wrong");
  }
  console.log("current score: ", score);
  console.log("____");
}


var questions=[{
  question: "where do i live?",
  answer: "mumbai"},{
  question: "My favourite super hero?",
  answer: "thor"},{
  question: "My birth month?",
  answer: "february"},{
  question: "My favourite food?",
  answer: "butter chicken"},{
  question: "My favourite place?",
  answer: "dubai"}];

  for(var i=0 ; i<questions.length ; i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  function showScore() { console.log("YAY! YOU SCORED" , score);
    console.log("Check out the high scores");
    highScores.map(score => console.log(score.name, " : ", score.score))
  }
  showScore();