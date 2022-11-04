var quizScreen = document.getElementById("quizId");
var questionP = document.getElementById("questionPElement");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timerEl = document.getElementById("timer");
var correctSpanEl = document.getElementById("correct");
var incorrectSpanEl = document.getElementById("wrong");
var formScreen = document.getElementById("formScreen");
var form = document.getElementById("form");
var formButton = document.getElementById("formButton");
var localArr;

function localStorageCheck() {
  if (localStorage.length === 0) {
    console.log("nothing Stored");
    localArr = [];
  } else {
    console.log("Else");
    localArr = JSON.parse(localStorage.getItem("pastScores"));
  }
  return localArr;
}

var index = 0;
var timeLeft = 50;
var endTimer = false;

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
  //hides correct/incorrect spans
  questionP.textContent = questions[index].question;
  option1.textContent = questions[index].optionA.value;
  option2.textContent = questions[index].optionB.value;
  option3.textContent = questions[index].optionC.value;
  option4.textContent = questions[index].optionD.value;
  validate();
};
//check if the programs at the end of the arr
var isCorrect = function () {
  correctSpanEl.style.visibility = "visible";
  incorrectSpanEl.style.visibility = "hidden";
  if (index === questions.length - 1) {
    console.log("out of questions");
    endTimer = true;
  } else {
    index++;
    console.log("selected option is correct");
    return buildQuiz();
  }
};

//if not correct move on and deduct time
var isIncorrect = function () {
  correctSpanEl.style.visibility = "hidden";
  incorrectSpanEl.style.visibility = "visible";
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
  correctSpanEl.style.visibility = "hidden";
  incorrectSpanEl.style.visibility = "hidden";
  quizScreen.style.visibility = "hidden";
  formScreen.style.visibility = "visible";
  saveScore();
};
var saveScore = function () {
  formButton.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      //hides form screen and shows scores
      formScreen.style.visibility = "hidden";
      //sets score value to user input plus time lift as a string
      score = form.value + " " + timeLeft;
      localArr = localArr.concat(score);
      localStorage.setItem("pastScores", JSON.stringify(localArr));
      //Change to display scores section
      console.log(localArr);
      window.location.href = "./scorePage.html";
    },
    { once: true }
  );
};

formScreen.style.visibility = "hidden";
localStorageCheck();
timer();
buildQuiz();
