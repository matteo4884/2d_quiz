import quizData from "./questions.js";
import challengingQuizData from "./questions_hard.js";

// LOGIN
const intro = document.querySelector(".intro");
const button = document.getElementById("login");
var playerName = document.getElementById("user");

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Enter":
      button.click();
      break;
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  const difficulty = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;
  switch (difficulty) {
    case "easy":
      var questions = 10;
      var hearts = 5;
      var type = quizData;
      document.getElementById("difficulty-panel").innerHTML = "Easy";
      document.getElementById("difficulty-panel").style.color = "#41c730";
      break;
    case "normal":
      var questions = 15;
      var hearts = 3;
      var type = quizData;
      document.getElementById("difficulty-panel").innerHTML = "Normal";
      document.getElementById("difficulty-panel").style.color = "#ffffff";
      break;
    case "hard":
      var questions = 15;
      var hearts = 1;
      var type = challengingQuizData;
      document.getElementById("difficulty-panel").innerHTML = "Hard";
      document.getElementById("difficulty-panel").style.color = "#c50000";
      break;
  }

  if (playerName.value === "") {
    document.querySelector(".error-login").style.display = "block";
  } else {
    startGame(questions, hearts, type);
    document.getElementById("audio").play();
    intro.style.display = "none";
    characterLabel.innerHTML = playerName.value;
  }
});

const gameBox = document.getElementById("gameBox");
let listBlocks = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 4, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 4, 3, 3,
  3, 3, 3, 4, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 4, 1, 1, 1, 2, 2, 2, 2, 1,
  1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 4,
  4, 4, 3, 3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 2, 2, 2,
  2, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 2,
  2, 2, 2, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 4, 3, 3, 3, 3, 3,
  3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 1, 1, 1, 4, 4, 4, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 5,
  5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 3, 3, 4, 4, 4, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3,
  3, 3, 4, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3,
  3, 3, 3, 3, 4, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
  3, 3, 3, 3, 3, 3, 4, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const numberOfRows = 40;
const numberOfCols = parseInt(listBlocks.length / numberOfRows);
const spawnBlock = 820;
var position = spawnBlock;

listBlocks.forEach((block, i) => {
  let newBlock = document.createElement("div");
  newBlock.id = (i + 1).toString();
  newBlock.classList.add("block");
  i + 1 === spawnBlock && newBlock.classList.add("spawn");
  block === 5 && newBlock.classList.add("terra");
  block === 4 && newBlock.classList.add("mattone");
  block === 3 && newBlock.classList.add("legno");
  block === 2 && newBlock.classList.add("acqua");
  block === 1 && newBlock.classList.add("erba");
  block === 0 && newBlock.classList.add("muro");
  gameBox.append(newBlock);
});
gameBox.style.gridTemplateColumns = `repeat(${numberOfCols}, 100px)`;
gameBox.style.gridTemplateRows = `repeat(${numberOfRows}, 100px)`;

// Character creation
let character = document.createElement("div");
let characterGif = document.createElement("img");
let characterLabel = document.createElement("div");
characterGif.src = "images/pg.gif";
character.appendChild(characterGif);
character.appendChild(characterLabel);
characterLabel.classList.add("character-label");
character.classList.add("character");
document.body.appendChild(character);

function startGame(totalQuestions, hearts, quiz) {
  var hitPoints = hearts;

  button.style.display = "none";

  const spawnPoint = document.querySelector(".spawn");
  spawnPoint.scrollIntoView({
    behavior: "instant",
    block: "center",
    inline: "center",
  });

  function moveToNewPos(position) {
    let newBlockPos = document.getElementById(position.toString());
    newBlockPos.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  let allWallBlocks = document.querySelectorAll(".muro");
  let allWaterBlocks = document.querySelectorAll(".acqua");
  let allMattoneBlocks = document.querySelectorAll(".mattone");
  let nullBlocks = [];
  allWallBlocks.forEach((block) => {
    nullBlocks.push(block.id);
  });
  allWaterBlocks.forEach((block) => {
    nullBlocks.push(block.id);
  });
  allMattoneBlocks.forEach((block) => {
    nullBlocks.push(block.id);
  });

  var stopMovement = false;

  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (!stopMovement) {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          if (position > numberOfRows && position <= listBlocks.length) {
            if (!nullBlocks.includes((position - numberOfRows).toString())) {
              position = position - numberOfRows;
              moveToNewPos(position);
            }
          }
          break;
        case "s":
        case "ArrowDown":
          if (position >= 0 && position < listBlocks.length - numberOfRows) {
            if (!nullBlocks.includes((position + numberOfRows).toString())) {
              position = position + numberOfRows;
              moveToNewPos(position);
            }
          }
          break;
        case "a":
        case "ArrowLeft":
          if (position > 1 && position <= listBlocks.length) {
            if (!nullBlocks.includes((position - 1).toString())) {
              position = position - 1;
              moveToNewPos(position);
            }
          }
          break;
        case "d":
        case "ArrowRight":
          if (position >= 0 && position <= listBlocks.length - 1) {
            if (!nullBlocks.includes((position + 1).toString())) {
              position = position + 1;
              moveToNewPos(position);
            }
          }
          break;
        case "Enter":
          location.reload();
          break;
      }
    }

    console.log(position);
    questionMechanism(position, stop);
  });

  // timer
  var millStop = "";
  var secondsStop = "";
  var minutesStop = "";
  function timer() {
    var mill = 0;
    var seconds = 0;
    var minutes = 0;

    let timerId = setInterval(() => {
      document.getElementById("minutes").innerHTML = checkZero(minutes);
      document.getElementById("seconds").innerHTML = checkZero(seconds);
      document.getElementById("mills").innerHTML = mill;

      mill++;
      if (mill === 10) {
        mill = 0;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
      }
    }, 100);

    function stopTimer() {
      clearInterval(timerId);
      millStop = mill;
      secondsStop = checkZero(seconds);
      minutesStop = checkZero(minutes);
    }

    function checkZero(number) {
      if (number < 10) {
        return (number = `0${number}`);
      } else {
        return `${number}`;
      }
    }
    return stopTimer;
  }
  const stopTimer = timer();

  //  Creation life mechanism
  let heartContainer = document.createElement("div");
  heartContainer.classList.add("heart-container");
  for (let i = 0; i < hearts; i++) {
    let heart = document.createElement("img");
    heart.classList.add("heart-full");
    heart.src = "images/full_heart.png";
    heartContainer.appendChild(heart);
    heart.id = `heart-${i + 1}`;
  }
  character.appendChild(heartContainer);

  // disable scroll
  document.body.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  // Generating mark questions

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var questionsBlock = [];
  var questions = 0;
  while (questions < totalQuestions) {
    let randomQuestion = getRandomInt(1600);
    if (!questionsBlock.includes(randomQuestion)) {
      if (
        !nullBlocks.includes(randomQuestion.toString()) ||
        !randomQuestion === 820
      ) {
        questionsBlock.push(randomQuestion);
        questions += 1;
      }
    }
  }

  questionsBlock.forEach((block) => {
    let freeBlock = document.getElementById(block.toString());
    let questionGif = document.createElement("img");
    questionGif.classList.add("question-gif");
    questionGif.src = "images/questionmark.gif";
    freeBlock.appendChild(questionGif);
  });

  //  Question mark function mechanism
  function questionMechanism(position) {
    questionsBlock.forEach((block) => {
      if (position == block) {
        stopMovement = true;
        let currentBlock = document.getElementById(position.toString());
        currentBlock.classList.add("remove-question-mark");
        createPopupQuestions();
        questionsBlock = questionsBlock.filter((el) => el !== position);
      }
    });
  }

  var popupQuestions = 0;
  var objQuestions = [];
  var currentPopupQuestions = [];
  function createObjectPopup() {
    while (popupQuestions < totalQuestions) {
      let randomPopupQuestion = getRandomInt(quiz.questions.length);
      if (
        !currentPopupQuestions.includes(quiz.questions[randomPopupQuestion])
      ) {
        currentPopupQuestions.push(quiz.questions[randomPopupQuestion]);
        objQuestions.push({
          block: questionsBlock[popupQuestions],
          popup: quiz.questions[randomPopupQuestion],
        });
        popupQuestions += 1;
      }
    }
  }
  createObjectPopup();

  function createPopupQuestions() {
    let popupQuestionsDOM = document.querySelector(".popup-questions");
    let correctAnswer = document.querySelector(".correct-animation");
    let wrongAnswer = document.querySelector(".wrong-animation");
    var animationResponse = "all 0.5s ease-in-out";

    objQuestions.forEach((el) => {
      if (position === el.block) {
        popupQuestionsDOM.style.opacity = 1;
        popupQuestionsDOM.style.pointerEvents = "all";
        document.querySelector(".popup-questions h3").innerHTML =
          el.popup.question;
        let optionsAnswers = [];
        let allAnswers = [
          el.popup.correct_answer,
          ...el.popup.incorrect_answers,
        ];
        var numberOptions = 0;
        let newEl = document.createElement("div");
        newEl.classList.add("popup-options");
        newEl.classList.add(`position-${el.block}`);
        while (numberOptions < 4) {
          let randomNumber4 = getRandomInt(4);
          if (!optionsAnswers.includes(randomNumber4)) {
            optionsAnswers.push(randomNumber4);
            let newOpt = document.createElement("div");
            newOpt.id = `option-${el.block}-${randomNumber4}`;
            for (let i = 0; i < 4; i++) {
              if (randomNumber4 === i) {
                newOpt.innerHTML = allAnswers[i];
              }
            }
            if (randomNumber4 === 0) {
              newOpt.addEventListener("click", () => {
                correctAnswerGame(newOpt, newEl);
              });
            } else {
              newOpt.addEventListener("click", () => {
                wrongAnswerGame(newOpt, newEl);
              });
            }
            newEl.appendChild(newOpt);
            numberOptions++;
          }
        }
        document.querySelector(".popup-questions").appendChild(newEl);
      }
    });

    function correctAnswerGame(newOpt, newEl) {
      if (
        questionsBlock.length === 0 ||
        questionsBlock.length + 1 === hitPoints
      ) {
        stopTimer();
        won();
      } else {
        console.log(questionsBlock.length);
        console.log(hitPoints);
        popupQuestionsDOM.style.opacity = 0;
        newOpt.style.backgroundColor = "#008f3933";
        popupQuestionsDOM.style.pointerEvents = "none";
        correctAnswer.style.transition = animationResponse;
        correctAnswer.style.opacity = 1;
        correctAnswer.style.scale = 1;
        questionsRemaining();
        setTimeout(() => {
          stopMovement = false;
          correctAnswer.style.transition =
            "opacity 0.2s ease-in-out, scale 0.2s 1s ease-in-out";
          correctAnswer.style.opacity = 0;
          correctAnswer.style.scale = 50;
          newOpt.style.backgroundColor = "";
          popupQuestionsDOM.removeChild(newEl);
        }, 1000);
      }
    }

    function wrongAnswerGame(newOpt, newEl) {
      console.log(hitPoints);
      if (questionsBlock.length === 0 && hitPoints > 1) {
        stopTimer();
        won();
      } else if (hitPoints > 1) {
        hitPoints--;
        popupQuestionsDOM.style.opacity = 0;
        newOpt.style.backgroundColor = "#cb323433";
        popupQuestionsDOM.style.pointerEvents = "none";
        wrongAnswer.style.transition = animationResponse;
        wrongAnswer.style.opacity = 1;
        wrongAnswer.style.scale = 1;
        questionsRemaining();
        setTimeout(() => {
          stopMovement = false;
          wrongAnswer.style.transition =
            "opacity 0.2s ease-in-out, scale 0.2s 1s ease-in-out";
          wrongAnswer.style.opacity = 0;
          wrongAnswer.style.scale = 50;
          newOpt.style.backgroundColor = "";
          heartsRemoving();
          popupQuestionsDOM.removeChild(newEl);
        }, 1000);
      } else {
        hitPoints--;
        heartsRemoving();
        popupQuestionsDOM.style.opacity = 0;
        newOpt.style.backgroundColor = "#cb323433";
        popupQuestionsDOM.style.pointerEvents = "none";
        questionsRemaining();
        lost();
      }
    }

    function lost() {
      let lostEl = document.getElementById("lost");
      lostEl.style.opacity = 1;
      lostEl.style.pointerEvents = "all";
    }

    function won() {
      let wonEl = document.getElementById("won");
      let score = document.getElementById("score");
      let scoreDifficulty = document.getElementById("score-difficulty");
      score.innerHTML = minutesStop + ":" + secondsStop + "." + millStop;
      scoreDifficulty.innerHTML = document.querySelector(
        'input[name="difficulty"]:checked'
      ).value;
      wonEl.style.opacity = 1;
      wonEl.style.pointerEvents = "all";
    }
  }

  function heartsRemoving() {
    // heart removing
    let heartsRemaining = document.querySelectorAll(".heart-full");
    heartsRemaining.forEach((heart, i) => {
      if (i === hitPoints) {
        heart.src = "images/empty_heart.png";
      }
    });
  }

  // Number of Questions reamaining
  function questionsRemaining() {
    const questionRemaining = document.querySelector(".question-remaining");
    questionRemaining.innerHTML = `${
      questions - questionsBlock.length
    } / ${questions}`;
  }
  questionsRemaining();

  // volume on/off
  let volumeIcon = document.querySelector(".audio-icon img");
  var volume = true;
  document.querySelector(".audio-icon").addEventListener("click", () => {
    if (volume) {
      volumeIcon.src = "images/volume_off.png";
      document.getElementById("audio").pause();
    } else {
      volumeIcon.src = "images/volume_on.png";
      document.getElementById("audio").play();
    }
    volume = !volume;
  });
}
