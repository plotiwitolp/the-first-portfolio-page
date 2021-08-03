const startGameBtn = document.getElementById("start-game");
const canvas = document.getElementById("canvas");
const endGameBtn = document.getElementById("end-game");
const whoseStep = document.getElementById("whose-step");

startGameBtn.addEventListener("click", startGame);
endGameBtn.addEventListener("click", endGame);

function startGame() {
  console.log("start game");
  drowCanvas();

  info.style.display = "block";
  startGameBtn.removeEventListener("click", startGame);
  startEffects();

  Steps();

  localGame();

  bigGame();
}

function drowCanvas() {
  console.log("drowing the canvas");
  function createTable() {
    for (i = 0; i < 3; i++) {
      const btr = document.createElement("div");
      btr.className = "btr";
      canvas.insertAdjacentElement("beforeEnd", btr);
      for (j = 0; j < 3; j++) {
        const btrArr = document.querySelectorAll(".btr");
        const btd = document.createElement("div");
        btd.className = "btd";
        btrArr[i].insertAdjacentElement("beforeEnd", btd);
      }
    }
    const btdArr = document.querySelectorAll(".btd");
    for (i = 0; i < btdArr.length; i++) {
      for (j = 0; j < 3; j++) {
        const str = document.createElement("div");
        str.className = "str";
        btdArr[i].insertAdjacentElement("beforeEnd", str);
      }
    }
    const strArr = document.querySelectorAll(".str");
    for (i = 0; i < strArr.length; i++) {
      for (k = 0; k < 3; k++) {
        const std = document.createElement("div");
        std.className = "std";

        strArr[i].insertAdjacentElement("beforeEnd", std);
      }
    }
  }
  createTable();
}

function startEffects() {
  const startDiv = document.querySelector(".start");
  startDiv.classList.add("start-effect");

  setTimeout(function () {
    startDiv.classList.remove("start-effect");
    startDiv.classList.add("start-effect2");
  }, 500);
  setTimeout(function () {
    startDiv.classList.add("start-effect2");
  }, 1000);
  setTimeout(function () {
    startDiv.classList.remove("start-effect2", "start");
  }, 1700);
}

function endGame() {
  location.reload();
}

function Steps() {
  let count = 0;

  canvas.addEventListener("click", function (e) {
    if (
      e.path[0].innerHTML === "" &&
      isEven() &&
      e.target.className === "std"
    ) {
      e.path[0].innerHTML = "X";
      count++;
      info.innerHTML = "Следующий ход делают нолики";

      setTimeout(function () {
        info.classList.add("font-effect");
      }, 100);
      setTimeout(function () {
        info.classList.remove("font-effect");
      }, 1000);
    } else if (
      e.path[0].innerHTML === "" &&
      !isEven() &&
      e.target.className === "std"
    ) {
      e.path[0].innerHTML = "O";
      count++;
      info.innerHTML = "Следующий ход делают крестики";
      setTimeout(function () {
        info.classList.add("font-effect");
      }, 100);
      setTimeout(function () {
        info.classList.remove("font-effect");
      }, 1000);
    }
    if (count === 81) {
      info.innerHTML = "Ходы закончились";
    }

    function isEven() {
      if (count % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  });
}

function localGame() {
  canvas.addEventListener("click", function () {
    const arrBtd = canvas.querySelectorAll(".btd");

    for (i = 0; i < 9; i++) {
      const arrStd = arrBtd[i].querySelectorAll(".std");

      coloringWin("X", arrStd, "rgb(0 165 0)", "rgb(172 255 172)");
      coloringWin("O", arrStd, "rgb(165 0 0)", "rgb(255 172 172)");

      // console.log(arrStd);

      function coloringWin(player, arrMap, colorPlayer, colorWin) {
        const wbtd = document.createElement("div");
        wbtd.className = "wbtd";

        if (isWin(0, 1, 2)) {
          whatToDo(0, 1, 2);
        } else if (isWin(3, 4, 5)) {
          whatToDo(3, 4, 5);
        } else if (isWin(6, 7, 8)) {
          whatToDo(6, 7, 8);
        } else if (isWin(0, 3, 6)) {
          whatToDo(0, 3, 6);
        } else if (isWin(1, 4, 7)) {
          whatToDo(1, 4, 7);
        } else if (isWin(2, 5, 8)) {
          whatToDo(2, 5, 8);
        } else if (isWin(0, 4, 8)) {
          whatToDo(0, 4, 8);
        } else if (isWin(2, 4, 6)) {
          whatToDo(2, 4, 6);
        }

        function isWin(a, b, c) {
          if (
            arrMap[a].innerHTML === player &&
            arrMap[b].innerHTML === player &&
            arrMap[c].innerHTML === player
          ) {
            return true;
          }
        }

        function whatToDo(a, b, c) {
          arrMap[a].style.color = colorPlayer;
          arrMap[b].style.color = colorPlayer;
          arrMap[c].style.color = colorPlayer;
          arrMap[0].insertAdjacentElement("beforeEnd", wbtd);
          arrMap[0].querySelector(".wbtd").style.background = colorWin;
          arrMap[0].querySelector(".wbtd").style.color = colorPlayer;
          arrMap[0].querySelector(".wbtd").innerHTML = player;
        }
      }
    }
  });
}

function bigGame() {
  canvas.addEventListener("click", function () {
    for (i = 0; i < 9; i++) {
      const arrBtd = canvas.querySelectorAll(".btd");
      // const winBtd = canvas.querySelectorAll(".btd")[i].querySelector(".wbtd");

      console.log(arrBtd[i].querySelector(".wbtd"));

      if (arrBtd[i].querySelector(".wbtd")) {
        coloringWin("X", arrBtd, "rgb(0 165 0)", "rgb(172 255 172)");
        coloringWin("O", arrBtd, "rgb(165 0 0)", "rgb(255 172 172)");

        function coloringWin(player) {
          if (isWin(0, 1, 2)) {
            whatToDo(0, 1, 2);
          } else if (isWin(3, 4, 5)) {
            whatToDo(3, 4, 5);
          } else if (isWin(6, 7, 8)) {
            whatToDo(6, 7, 8);
          } else if (isWin(0, 3, 6)) {
            whatToDo(0, 3, 6);
          } else if (isWin(1, 4, 7)) {
            whatToDo(1, 4, 7);
          } else if (isWin(2, 5, 8)) {
            whatToDo(2, 5, 8);
          } else if (isWin(0, 4, 8)) {
            whatToDo(0, 4, 8);
          } else if (isWin(2, 4, 6)) {
            whatToDo(2, 4, 6);
          }

          function isWin(a, b, c) {
            if (
              arrBtd[a].querySelector(".wbtd") &&
              arrBtd[a].querySelector(".wbtd").innerHTML === player &&
              arrBtd[b].querySelector(".wbtd") &&
              arrBtd[b].querySelector(".wbtd").innerHTML === player &&
              arrBtd[c].querySelector(".wbtd") &&
              arrBtd[c].querySelector(".wbtd").innerHTML === player
            ) {
              return true;
            }
          }

          function whatToDo() {
            const bigWinner = document.getElementById("big-winner");
            const gameEnd = "Игра окончена! \n\n";
            bigWinner.style.width = "450px";
            bigWinner.style.height = "315px";
            if (player === "X") {
              setTimeout(() => {
                bigWinner.innerHTML = gameEnd + "Победили КРЕСТИКИ";
              }, 300);
            } else if (player === "O") {
              setTimeout(() => {
                bigWinner.innerHTML = gameEnd + "Победили НОЛИКИ";
              }, 300);
            }
          }
        }
      }
    }
  });
}
