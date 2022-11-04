var startButton = document.getElementById("start");

//start function button
startButton.addEventListener("click", function () {
  window.location.href = "./assets/pages/quizPage.html";
  correctSpanEl.style.visibility = "hidden";
  incorrectSpanEl.style.visibility = "hidden";
  startScreen.style.visibility = "hidden";
  quizScreen.style.visibility = "visible";
  timer();
  buildQuiz();
});
