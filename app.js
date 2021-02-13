// Ex -14
//https://neog.camp/guide/lesson-one

var score = 0;

var readlineSync = require('readline-sync')


var item1 = {
  question : "Where do you live:",
  answer : "anand"
}

var item2 = {
  question : "Where do you work:",
  answer : "codal"
}

var item3 = {
  question : "What is your favourite sport:",
  answer : "cricket"
}

var quizArray = [item1,item2,item3]

for(var i = 0 ; i < quizArray.length ; i++){
  quiz(quizArray[i].question,quizArray[i].answer)
}

function quiz(question,rightAnswer){

  var userAnswer = readlineSync.question(question)

  if(userAnswer === rightAnswer){
    console.log("You are right!")
    score = score + 1
    console.log("Score:" + score)
  }
  else{
    console.log("You are wrong")
    score = score - 1
    console.log("Score:" + score)
  }
}
