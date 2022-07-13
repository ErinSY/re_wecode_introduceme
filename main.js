const button = document.querySelector(".changeMode");
// const background = document.getElementsByTagName('body');
let mainbody = document.querySelector(".menuColor");

function changeColor() {
  // let mainbody = document.getElementsByTagName('header')[0]

  mainbody.classList.toggle('darkmode');
}

button.addEventListener("click", changeColor);
