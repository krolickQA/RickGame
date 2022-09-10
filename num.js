const rick = document.getElementById("rick");
const horse = document.getElementById("horse");
const start = document.getElementById("start");
const over = document.getElementById("over");
const counter = document.getElementById("counter");
const fieldGame = document.getElementById("game");

function jump() {
  if (rick.classList != "jump") {
    rick.classList.add("jump");
    setTimeout(function () {
      rick.classList.remove("jump");
    }, 300);
  }
}
let count = 0;
let isAlive = setInterval(() => {
  let rickTop = parseInt(window.getComputedStyle(rick).getPropertyValue("top"));
  let horseLeft = parseInt(
    window.getComputedStyle(horse).getPropertyValue("left")
  );
  if (horseLeft < 90 && horseLeft > 0 && rickTop >= 250) {
    horse.classList.remove("block");
    over.style.visibility = "visible";
  }

  count = srore(horseLeft, count);
  counter.textContent = count;
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

fieldGame.addEventListener("touchstart", function (event) {
  jump();
});

start.addEventListener("click", function (event) {
  horse.classList.add("block");
  over.style.visibility = "hidden";
  count = 0;
});

function srore(horseLeft, count) {
  if (horseLeft < 50) count++;
  return count;
}
