const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
let minutes = document.getElementById("minute");
const btnSoundOn = document.getElementById("btn-sound-on");
const btnSoundOff = document.getElementById("btn-sound-off");
const bell = document.getElementById("bell");

let paused = false;
let holder;
let resetHolderMin;
let resetHolderSec;
let started = false;

btnSoundOn.addEventListener("click", () => {
  document.getElementById("ambient-sound").pause();
  document.getElementById("ambient-sound").muted = true;
})

function rangeSlide(value) {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `${value}:00`;
  }
}

btnStart.addEventListener("click", () => {
  let duration;

  started = true;

  document.getElementById("minute").disabled = true;

  console.log(minutes.value);

  if (paused) {
    duration = holder;
    document.getElementById("ambient-sound").play();
    paused = false;
  } else {
    bell.currentTime = 0;
    bell.play();
    document.getElementById("ambient-sound").play();
    duration = parseInt(minutes.value) * 60;
  }

  resetHolderMin = Math.floor(duration / 60);
  resetHolderSec = Math.floor(duration % 60);

  resetHolderSec = resetHolderSec < 10 ? "0" + resetHolderSec : resetHolderSec;

  display = document.querySelector(".timer");

  btnStart.classList.remove("show");
  btnStart.classList.add("hide");
  btnPause.classList.remove("hide");
  btnPause.classList.add("show");

  timer(duration, display);
});

const timer = (duration, display) => {
  let timer = duration;
  let minutes, seconds;

  let interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = Math.floor(timer % 60);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${minutes}:${seconds}`;

    timer -= 1;

    if (timer < 0) {
      document.getElementById("ambient-sound").pause();
      bell.play();
      display.innerHTML = "FIM!";
      btnPause.classList.remove("show");
      btnPause.classList.add("hide");
      btnStart.classList.remove("hide");
      btnStart.classList.add("show");
      clearInterval(interval);
      document.getElementById("minute").disabled = false;
      started = false;
    }

    btnPause.addEventListener(
      "click",
      (resetTime = () => {
        holder = timer;
        document.getElementById("ambient-sound").pause();
        bell.pause();
        bell.currentTime = 0;
        clearInterval(interval);
        btnPause.classList.remove("show");
        btnPause.classList.add("hide");
        btnStart.classList.remove("hide");
        btnStart.classList.add("show");
        paused = true;
        console.log(holder);
      })
    );

    reset.addEventListener(
      "click",
      (resetTime = () => {
        clearInterval(interval);
        document.getElementById("ambient-sound").pause();
        bell.pause();
        display.innerHTML = `${resetHolderMin}:${resetHolderSec}`;
        btnPause.classList.remove("show");
        btnPause.classList.add("hide");
        btnStart.classList.remove("hide");
        btnStart.classList.add("show");
        paused = false;
        started = false;
        document.getElementById("minute").disabled = false;
      })
    );
  }, 1000);
};

function rangeSlide(value) {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `${value}:00`;
  }
}
