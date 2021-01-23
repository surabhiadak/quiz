var readlineSync = require("readline-sync");
//input>>processing>>output
var userName = readlineSync.question ("What is your name? ");
var score = 0;

console.log ("Hi " + userName + " Welcome to DO YOU KNOW SURABHI" )


//comparison with high score: Another array of objects
var highScores =
[
  {
    name: "Surabhi",
    score: "4"
  },
  {
    name: "Swaru",
    score: "3"
  }
]
function play(question, answer)
{
  var userAnswer = readlineSync.question(question)
  
  if (userAnswer === answer)   //Branching
  {
    console.log("You are right")
    score = score + 1;
  }
  else
  {
    console.log("You are wrong")
    score = score-1;
  }
  console.log ("Your score is:" + score)
  console.log ("--------------------------------------------------")
}
/* 
Here we have to write the function many times if there are more questions so what we can do is we created an object, like this 
play ("Where do I live? ", "Mumbai")
play ("Where do I work? ", "Wipro")
*/
/*Here are the objects
var questionOne = 
{
  question: "Where do I live? ",
  answer: "Mumbai"
}
var questionTwo =
{
  question: "Where do I work? ",
  answer: "Wipro"
}
*/
/* Now we have to create an Array of objects to access them , now if you are smart you will put questions ans answers together in the array itself, so we created ARRAY OF OBJECTS like this: 
Now this is the beauty of data structures, you can create many questions using objects in the array itself.
*/
var questions = 
[
  {
  question: "Where do I live? ",
  answer: "Mumbai"
  },
  {
  question: "Where do I work? ",
  answer: "Wipro"
  },
  {
  question: "What is my favourite book? ",
  answer: "Atomic Habits"
  },
  {
  question: "What is my favourite dessert? ",
  answer: "Icecream"
  }
];
//for loop
for(var i=0;i<questions.length;i++)
{
  var currentQuestion = questions[i]; // We did array access via i 
  play (currentQuestion.question, currentQuestion.answer) // We accessed objects using .question 
}

//Print the final score
console.log("YAY! This is your final score: " +score)
console.log("--------------------------------------------------")

//Print the Highest scores:
console.log("Highest scores are: ")
for(var i=0; i<highScores.length; i++)
{
  var currentScore = highScores[i]
  console.log(currentScore.name)
  console.log(currentScore.score)
}
