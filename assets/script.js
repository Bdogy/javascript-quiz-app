var startScreen = document.getElementById("startScreenId");
var quizScreen = document.getElementById("quizId");
var scoresScreen = document.getElementById("scoresId");
var startButton = document.getElementById("start");

quizScreen.style.visibility = "hidden";
quizScreen.style.visibility = "hidden";

startButton.addEventListener("click", function () {
  console.log("clicked!!");
  startScreen.style.visibility = "hidden";
  quizScreen.style.visibility = "visible";
});
