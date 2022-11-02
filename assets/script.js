var startScreen = document.getElementById("startScreenId");
var quizScreen = document.getElementById("quizId");
var scoresScreen = document.getElementById("scoresId");
var startButton = document.getElementById("start");
var questionP = document.getElementById("questionPElement");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
index = 0;

//questions
var questions = [
  {
    question: "1: The answers A",
    optionA: { value: "A option", correct: true },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
  {
    question: "2: The answers A",
    optionA: { value: "A option", correct: true },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
  {
    question: "3: The answers A",
    optionA: { value: "A option", correct: true },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
  {
    question: "4: The answers A",
    optionA: { value: "A option", correct: true },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
  {
    question: "5: The answers A",
    optionA: { value: "A option", correct: true },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
];

console.log(questions[index].optionA.value);
//hides all other screen except start
quizScreen.style.visibility = "hidden";
scoresScreen.style.visibility = "hidden";

//start function button
startButton.addEventListener("click", function () {
  startScreen.style.visibility = "hidden";
  quizScreen.style.visibility = "visible";
  buildQuiz();
});

//builds the quiz and displays to page
var buildQuiz = function () {
  console.log(index + "index");
  questionP.textContent = questions[index].question;
  option1.textContent = questions[index].optionA.value;
  option2.textContent = questions[index].optionB.value;
  option3.textContent = questions[index].optionC.value;
  option4.textContent = questions[index].optionD.value;
  validate();
};

var optionAValidate = function () {
  //check if question a is correct
  if (questions[index].optionA.correct) {
    //run correct answer and move to next
    index++;
    console.log(index + "adding index");
    return buildQuiz();
  }
};

var validate = function () {
  //runs without reclicking for index 2
  option1.addEventListener("click", optionAValidate);
  option2.addEventListener("click", function () {
    if (questions[index].optionB.correct) {
      //run correct answer and move to next
      index++;
      return buildQuiz();
    }
  });
  option3.addEventListener("click", function () {
    if (questions[index].optionB.correct) {
      //run correct answer and move to next
      index++;
      return buildQuiz();
    }
  });
  option4.addEventListener("click", function () {
    if (questions[index].optionB.correct) {
      //run correct answer and move to next
      index++;
      return buildQuiz();
    }
  });
};
