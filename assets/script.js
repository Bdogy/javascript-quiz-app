var startScreen = document.getElementById("startScreenId");
var quizScreen = document.getElementById("quizId");
var scoresScreen = document.getElementById("scoresId");
var startButton = document.getElementById("start");
var questionP = document.getElementById("questionPElement");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

//questions
var questions = [
  {
    question: "1: The answers A",
    optionA: "A option",
    optionB: "B",
    optionC: "C",
    optionD: "D",
  },
  {
    question: "2: The answers A",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
  },
  {
    question: "3: The answers A",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
  },
  {
    question: "4: The answers A",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
  },
  {
    question: "5: The answers A",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
  },
];
//hides all other screen except start
quizScreen.style.visibility = "hidden";
scoresScreen.style.visibility = "hidden";

//start function button
startButton.addEventListener("click", function () {
  console.log("clicked!!");
  startScreen.style.visibility = "hidden";
  quizScreen.style.visibility = "visible";
  buildQuiz();
});

//builds the quiz and displays to page
var buildQuiz = function () {
  questionP.textContent = questions[0].question;
  option1.textContent = questions[0].optionA;
};
