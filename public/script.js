console.log("working");

import quizData from "./questions.js";

const gameBox = document.getElementById("gameBox");
let listBlocks = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 3, 3,
  3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 5, 2, 2, 2, 5,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 5, 2, 2, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 5, 5, 5,
  5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

console.log(listBlocks.length);
const numberOfRows = 40;
const numberOfCols = parseInt(listBlocks.length / numberOfRows);
const spawnBlock = 820;
const totalQuestions = 10;
const hearts = 3;
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

const spawnPoint = document.querySelector(".spawn");
setTimeout(() => {
  spawnPoint.scrollIntoView({
    behavior: "instant",
    block: "center",
    inline: "center",
  });
}, 500);

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
function createMovement() {
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
      }
    }

    console.log(position);
    questionMechanism(position, stop);
  });
}

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

//  Creation life mechanism
let heartContainer = document.createElement("div");
heartContainer.classList.add("heart-container");
for (let i = 0; i < hearts; i++) {
  let heart = document.createElement("img");
  heart.classList.add("heart-full");
  heart.src = "images/full_heart.png";
  heartContainer.appendChild(heart);
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

// LOGIN
const intro = document.querySelector(".intro");
const button = document.getElementById("login");
var playerName = document.getElementById("user");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (playerName.value === "") {
    document.querySelector(".error-login").style.display = "block";
  } else {
    intro.style.display = "none";
    createMovement();
    characterLabel.innerHTML = playerName.value;
  }
});

console.log(nullBlocks);

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
console.log(questionsBlock);

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
      console.log("question start");
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
    let randomPopupQuestion = getRandomInt(50);
    if (
      !currentPopupQuestions.includes(quizData.questions[randomPopupQuestion])
    ) {
      currentPopupQuestions.push(quizData.questions[randomPopupQuestion]);
      objQuestions.push({
        block: questionsBlock[popupQuestions],
        popup: quizData.questions[randomPopupQuestion],
      });
      popupQuestions += 1;
    }
  }
}
createObjectPopup();

function createPopupQuestions() {
  let popupQuestionsDOM = document.querySelector(".popup-questions");
  let option1 = document.querySelector(".option-1");
  let option2 = document.querySelector(".option-2");
  let option3 = document.querySelector(".option-3");
  let option4 = document.querySelector(".option-4");
  let correctAnswer = document.querySelector(".correct-animation");
  let wrongAnswer = document.querySelector(".wrong-animation");
  var animationResponse = "all 0.5s ease-in-out";
  var options = [option1, option2, option3, option4];
  var numberOfOptions = 0;
  let allOptionsPopup = [];
  objQuestions.forEach((question) => {
    if (position == question.block) {
      console.log(question.block, question.popup);
      popupQuestionsDOM.style.opacity = 1;
      popupQuestionsDOM.style.pointerEvents = "all";
      document.querySelector(".popup-questions h3").innerHTML =
        question.popup.question;
      var numberOfIncorrectAnswers = 0;
      while (numberOfOptions < 4) {
        let randomOption = getRandomInt(4);
        if (!allOptionsPopup.includes(options[randomOption])) {
          allOptionsPopup.push(options[randomOption]);

          if (numberOfOptions === 0) {
            options[randomOption].innerHTML = question.popup.correct_answer;
            options[randomOption].classList.add("dont_cheat_u_fool");
            options[randomOption].addEventListener("click", () => {
              if (
                options[randomOption].classList.contains("dont_cheat_u_fool")
              ) {
                popupQuestionsDOM.style.opacity = 0;
                options[randomOption].style.backgroundColor = "#008f3933";
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
                  options[randomOption].style.backgroundColor = "";
                  options[randomOption].classList.remove("dont_cheat_u_fool");
                }, 1000);
              }
            });
          } else {
            options[randomOption].innerHTML =
              question.popup.incorrect_answers[numberOfIncorrectAnswers];
            options[randomOption].addEventListener("click", () => {
              if (
                !options[randomOption].classList.contains("dont_cheat_u_fool")
              ) {
                popupQuestionsDOM.style.opacity = 0;
                options[randomOption].style.backgroundColor = "#cb323433";
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
                  options[randomOption].style.backgroundColor = "";
                  options[0].classList.remove("dont_cheat_u_fool");
                  options[1].classList.remove("dont_cheat_u_fool");
                  options[2].classList.remove("dont_cheat_u_fool");
                  options[3].classList.remove("dont_cheat_u_fool");
                }, 1000);
              }
            });
            numberOfIncorrectAnswers += 1;
          }
          numberOfOptions += 1;
        }
      }
      console.log(allOptionsPopup);
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
