var startScreen = document.getElementById("startScreenId");
var quizScreen = document.getElementById("quizId");
var scoresScreen = document.getElementById("scoresId");
var startButton = document.getElementById("start");
var questionP = document.getElementById("questionPElement");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timerEl = document.getElementById("timer");
var form = document.getElementById("form");
var formButton = document.getElementById("formButton");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;
var index = 0;
var timeLeft = 50;
var endTimer = false;
var localScore = localStorage.getItem("pastScores");
var localArr;
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
    question: "2: The answers B",
    optionA: { value: "A option", correct: false },
    optionB: { value: "B option", correct: true },
    optionC: { value: "C option", correct: false },
    optionD: { value: "D option", correct: false },
  },
  {
    question: "3: The answers C",
    optionA: { value: "A option", correct: false },
    optionB: { value: "B option", correct: false },
    optionC: { value: "C option", correct: true },
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

//sets score to html
function localStorageCheck() {
  if (localStorage.length === 0) {
    console.log("nothing Stored");
    localArr = [];
  } else {
    console.log("Else");
  }
  return localArr;
}

localStorageCheck();
console.log(localArr);
//hides all other screen except start
quizScreen.style.visibility = "hidden";
scoresScreen.style.visibility = "hidden";

//start function button
startButton.addEventListener("click", function () {
  startScreen.style.visibility = "hidden";
  quizScreen.style.visibility = "visible";
  timer();
  buildQuiz();
});

//timer
var timer = function () {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0 || endTimer) {
      //exit code
      clearInterval(timerInterval);
      endOfQuiz();
    }
  }, 1000);
};
//builds the quiz and displays to page
var buildQuiz = function () {
  console.log(index + " index");
  questionP.textContent = questions[index].question;
  option1.textContent = questions[index].optionA.value;
  option2.textContent = questions[index].optionB.value;
  option3.textContent = questions[index].optionC.value;
  option4.textContent = questions[index].optionD.value;
  validate();
};
//check if the programs at the end of the arr
var isCorrect = function () {
  if (index === questions.length - 1) {
    console.log("out of questions");
    endTimer = true;
  } else {
    index++;
    console.log("selected option is corret");
    return buildQuiz();
  }
};

//if not correct move on and deduct time
var isIncorrect = function () {
  timeLeft = timeLeft - 10;
  if (index === questions.length - 1) {
    console.log("out of questions");
    endTimer = true;
  } else {
    index++;
    console.log("selected option is wrong");
    return buildQuiz();
  }
};
//different option validation
var optionAValidate = function () {
  //check if question a is correct
  if (questions[index].optionA.correct) {
    return isCorrect();
  } else {
    return isIncorrect();
  }
};
var optionBValidate = function () {
  //check if question a is correct
  if (questions[index].optionB.correct) {
    return isCorrect();
  } else {
    return isIncorrect();
  }
};
var optionCValidate = function () {
  //check if question a is correct
  if (questions[index].optionC.correct) {
    return isCorrect();
  } else {
    return isIncorrect();
  }
};
var optionDValidate = function () {
  //check if question a is correct
  if (questions[index].optionD.correct) {
    return isCorrect();
  } else {
    return isIncorrect();
  }
};

var validate = function () {
  //checks if index is over the amount of questions
  if (index === questions.length) {
    //end game here
    console.log("out of questions");
  }
  //checks evens for each button if true runs option validation
  option1.addEventListener("click", optionAValidate);
  option2.addEventListener("click", optionBValidate);
  option3.addEventListener("click", optionCValidate);
  option4.addEventListener("click", optionDValidate);
};

var endOfQuiz = function () {
  console.log("end of quiz");
  quizScreen.style.visibility = "hidden";
  scoresScreen.style.visibility = "visible";
  saveScore();
};

var saveScore = function () {
  console.log("1 pressed");
  formButton.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      score = form.value + " " + timeLeft;
    },
    { once: true }
  );
};
