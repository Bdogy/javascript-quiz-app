localArr = JSON.parse(localStorage.getItem("pastScores"));
var scoreDiv = document.getElementById("scoreDiv");
var playAgain = document.getElementById("play-again");

for (let i = 0; i < localArr.length; i++) {
  liEl = document.createElement("li");
  liEl.textContent = localArr[i];
  scoreDiv.appendChild(liEl);
}

playAgain.addEventListener("click", function () {
  window.location.href = "./StartPage.html";
});
