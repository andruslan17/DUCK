//to set the initial values of the speed, sounds, game music
//in the local storage
if (localStorage.getItem("speed") === null)
  window.localStorage.setItem("speed", 5);
if (localStorage.getItem("soundEffectOn") === null)
  window.localStorage.setItem("soundEffectOn", true);
if (localStorage.getItem("musicOn") === null)
  window.localStorage.setItem("musicOn", true);
if (localStorage.getItem("imgUrl") === null)
  window.localStorage.setItem("imgUrl", "img/1.jpg");

document.getElementById("speed").value = parseInt(
  localStorage.getItem("speed")
);
document.getElementById("soundEffect").checked =
  localStorage.getItem("soundEffectOn") === "true" ? true : false;
document.getElementById("music").checked =
  localStorage.getItem("musicOn") === "true" ? true : false;
document.getElementById("backgroundOne").src = localStorage.getItem("imgUrl");

document.getElementById(localStorage.getItem("imgUrl")).style.borderColor =
  "#57b846";
document.getElementById(localStorage.getItem("imgUrl")).style.borderWidth =
  "3px";

function onConfirm() {
  game.soundEffectOn = document.getElementById("soundEffect").checked;
  game.musicOn = document.getElementById("music").checked;
  game.ball.speed = document.getElementById("speed").value;

  window.localStorage.setItem("soundEffectOn", game.soundEffectOn);
  window.localStorage.setItem("musicOn", game.musicOn);
  window.localStorage.setItem("speed", game.ball.speed);
}

function imgSelect(url) {
  document.getElementById("img/1.jpg").style.borderColor = "#919191";
  document.getElementById("img/2.jpg").style.borderColor = "#919191";
  document.getElementById("img/3.jpg").style.borderColor = "#919191";
  document.getElementById("img/1.jpg").style.borderWidth = "1px";
  document.getElementById("img/2.jpg").style.borderWidth = "1px";
  document.getElementById("img/3.jpg").style.borderWidth = "1px";

  document.getElementById("img/" + url).style.borderColor = "#57b846";
  document.getElementById("img/" + url).style.borderWidth = "3px";

  window.localStorage.setItem("imgUrl", "img/" + url);
}
