let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;
let answerList = [];
let gameover = false;
let life = 5;

const guessField = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");
const numOfLifeife = document.getElementById("numOfLife");

function gameoverfunc() {
  if (gameover) {
    result.textContent = `정답은 ${randomNumber} 입니다. 다음 기회에...`;
    submitButton.disabled = true;
  }
}

function checkGuess() {
  userGuess = Number(guessField.value);

  if (userGuess == "") {
    result.textContent = "숫자를 입력하세요";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "1부터 100 사이의 숫자를 입력하세요";
    return;
  }

  if (answerList.includes(userGuess)) {
    result.textContent = "이미 입력한 숫자입니다.";

    return;
  }
  answerList.push(userGuess);

  if (userGuess !== randomNumber) {
    life -= 1;
    numOfLifeife.textContent = `남은 기회는 ${life}번 입니다.`;
  }
  if (userGuess === randomNumber) {
    result.textContent = "축하합니다! 정답입니다!";
  } else if (userGuess > randomNumber) {
    result.textContent = "너무 높습니다!";
  } else if (userGuess < randomNumber) {
    result.textContent = "너무 낮습니다!";
  }

  if (life === 0) {
    result.textContent = `정답은 ${randomNumber} 입니다. 다음 기회에...`;
    gameover = true;
    gameoverfunc();
  }
}

function resetGame() {
  life = 5;
  numOfLifeife.textContent = `남은 기회는 ${life}번 입니다.`;
  result.textContent = "";
  guessField.value = "";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  gameover = false;
  answerList = [];
  submitButton.disabled = false;
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
