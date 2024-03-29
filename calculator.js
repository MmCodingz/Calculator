const screen = document.querySelector("#input2");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector(".btn-box-c");
const enter = document.querySelector(".btn-box-enter");
const next = document.querySelector(".btn-box-next");
const powerbtn = document.querySelector(".btn-box-power");
const btn0 = document.querySelector(".btn-box-0");
const btn1 = document.querySelector(".btn-box-1");
const btn2 = document.querySelector(".btn-box-2");
const btn3 = document.querySelector(".btn-box-3");
const btn4 = document.querySelector(".btn-box-4");
const btn5 = document.querySelector(".btn-box-5");
const btn6 = document.querySelector(".btn-box-6");
const btn7 = document.querySelector(".btn-box-7");
const btn8 = document.querySelector(".btn-box-8");
const btn9 = document.querySelector(".btn-box-9");
const btnc = document.querySelector(".btn-box-c");
const plusbtn = document.querySelector(".btn-box-plus");

const replaybtn = document.querySelector(".btn-box-replay");
const randomNumbertext = document.getElementById("input1");
const scoretext = document.getElementById("score-number");
const scorenum = document.getElementById("score-number");
let score = Number(document.getElementById("score-number"));
let randomNumber = Math.floor(Math.random() * 10) + 1;
let isOn = true;
let value1 = "";
let value2 = "";

let isPlusPressed = false;
let isPlaying = false;
scorenum.value = 0;
score = 0;
// DISABLE BTNS
const disabledbtn = function (trueOrFalse) {
  btn0.disabled = trueOrFalse;
  btn1.disabled = trueOrFalse;
  btn2.disabled = trueOrFalse;
  btn3.disabled = trueOrFalse;
  btn4.disabled = trueOrFalse;
  btn5.disabled = trueOrFalse;
  btn6.disabled = trueOrFalse;
  btn7.disabled = trueOrFalse;
  btn8.disabled = trueOrFalse;
  btn9.disabled = trueOrFalse;
  btnc.disabled = trueOrFalse;
  enter.disabled = trueOrFalse;
  replaybtn.disabled = trueOrFalse;
  next.disabled = trueOrFalse;
  plusbtn.disabled = trueOrFalse;
};
// DELETE VALUES ON THE SCREEN
const deleteValue = function () {
  value1 = "";
  value2 = "";
  isPlusPressed = false;
};
//GAME DISPLAY WHEN OFF
const gameoff = function () {
  disabledbtn(true);
  next.disabled = true;
  randomNumbertext.classList.add("hidden");
  powerbtn.blur();
  deleteValue();
  score = 0;
  scoretext.value = 0;
  isOn = true;
  isPlaying = false;
};
gameoff();

// OBTAIN A RANDOM NUMBER
const setRandomNumber = function () {
  randomNumbertext.value = randomNumber;
};

//DISPLAY OR ADD NUMBER TOGETHER
const handleNumberbutonClick = function (numberString) {
  {
    if (isPlusPressed) {
      value2 = value2 + numberString;
    } else {
      value1 = value1 + numberString;
    }

    if (isPlusPressed) {
      screen.value = value2;
    } else {
      screen.value = value1;
    }
  }
};

//TURN ON AND OFF THE CALCULATOR
powerbtn.addEventListener("click", function () {
  isPlaying = true;
  if (isPlaying) {
    console.log(isOn);
    if (isOn) {
      isOn = false;
      restartGame();
    } else {
      screen.value = "Goodbye Calvin and Edric";
      gameoff();
      setTimeout(() => (screen.value = ""), 2000);
    }
  }
});

//WINNING FUNCTION
const win = function () {
  if (score === 2) {
    screen.value = "YOU WIN";
    randomNumbertext.classList.add("hidden");
    score = 0;
    scoretext.value = 0;
    disabledbtn(true);
    replaybtn.disabled = false;
  }
};
//EGUAL FUNCTION
const egual = function () {
  let answer = Number(value1) + Number(value2);
  if (answer === randomNumber) {
    screen.value = "Yay,press Next";
    deleteValue();
    disabledbtn(true);
    next.disabled = false;
    score++;
    scoretext.value++;
  } else {
    screen.value = "oups try again";
    deleteValue();
    next.disabled = true;
    plusbtn.disabled = false;
  }
  win();
};
//RESTART GAME
const restartGame = function () {
  screen.value = "Hello! Add 2 Numbers";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  setRandomNumber();
  randomNumbertext.classList.remove("hidden");
  disabledbtn(false);
  next.disabled = true;
  replaybtn.disabled = true;
};
//FUNCTION FOR BTN NEX
const nextfunction = function () {
  randomNumbertext.classList.remove("hidden");
  randomNumber = Math.floor(Math.random() * 10) + 1;
  setRandomNumber();
  screen.value = "";
  disabledbtn(false);
  replaybtn.disabled = true;
};
// KEYDOWN
window.addEventListener("keydown", (e) => {
  if (isPlaying) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    if (e.key === "0") {
      handleNumberbutonClick("0");
    } else if (e.key === "1") {
      handleNumberbutonClick("1");
    } else if (e.key === "2") {
      handleNumberbutonClick("2");
    } else if (e.key === "3") {
      handleNumberbutonClick("3");
    } else if (e.key === "4") {
      handleNumberbutonClick("4");
    } else if (e.key === "5") {
      handleNumberbutonClick("5");
    } else if (e.key === "6") {
      handleNumberbutonClick("6");
    } else if (e.key === "7") {
      handleNumberbutonClick("7");
    } else if (e.key === "8") {
      handleNumberbutonClick("8");
    } else if (e.key === "9") {
      handleNumberbutonClick("9");
    } else if (e.key === "+") {
      isPlusPressed = true;
      screen.value = "+";
    } else if (e.key === "Enter") {
      egual();
    } else if (e.key === "Backspace") {
      if (isPlusPressed) {
        value2 = "";
        screen.value = value2;
      } else {
        value1 = "";
        screen.value = value1;
      }
    }
  }
});
// DISPLAY NUMBER BTN TO SCREEN AND ADDED REQUIRED FUNCTION TO BTN
const btnfunction = function () {
  btn0.addEventListener("click", function () {
    {
      handleNumberbutonClick("0");
    }
  });

  btn1.addEventListener("click", function () {
    handleNumberbutonClick("1");
  });
  btn2.addEventListener("click", function () {
    handleNumberbutonClick("2");
  });

  btn3.addEventListener("click", function () {
    handleNumberbutonClick("3");
  });

  btn4.addEventListener("click", function () {
    handleNumberbutonClick("4");
  });

  btn5.addEventListener("click", function () {
    handleNumberbutonClick("5");
  });

  btn6.addEventListener("click", function () {
    handleNumberbutonClick("6");
  });

  btn7.addEventListener("click", function () {
    handleNumberbutonClick("7");
  });

  btn8.addEventListener("click", function () {
    handleNumberbutonClick("8");
  });

  btn9.addEventListener("click", function () {
    handleNumberbutonClick("9");
  });

  btnc.addEventListener("click", function () {
    screen.value = "0";
    deleteValue();
  });
  plusbtn.addEventListener("click", function () {
    plusbtn.disabled = true;
    isPlusPressed = true;
    screen.value = "+";
  });
  enter.addEventListener("click", function () {
    egual();
  });

  next.addEventListener("click", function () {
    nextfunction();
  });

  replaybtn.addEventListener("click", function () {
    restartGame();
    deleteValue();
    //
  });
};
btnfunction();
