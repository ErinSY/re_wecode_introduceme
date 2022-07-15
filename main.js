const button = document.querySelector(".changeMode");
// const background = document.getElementsByTagName('body');
let mainbody = document.querySelector(".menuColor");

function changeColor() {
  // let mainbody = document.getElementsByTagName('header')[0]

  mainbody.classList.toggle('darkmode');
}

button.addEventListener("click", changeColor);

function currentTime () {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const ptag = document.querySelector('p');
  ptag.innerHTML = `${hour} : ${min} : ${sec}`;
}

function livetime() {
currentTime();
 setInterval(currentTime,1000)

}

window.addEventListener('load', livetime)