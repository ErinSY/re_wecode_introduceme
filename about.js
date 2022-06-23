const fadeinEls = document.querySelectorAll('.inner .textani')

fadeinEls.forEach(function(textanimation,index){
  gsap.to(textanimation,1,{
    delay:(index + 1) * .6,
    opacity:1
  })
})

const content ="가을에 피크닉 가는게 너무 좋아요"
const text = document.querySelector('#typingAni')
var index=0 

function typing() {
  text.textContent += content[index++]
  if(index>content.length){
    text.textContent=""
    index=0;
  }
}


setInterval(typing,200)


function game () {
  var randomNumber1 = 
    Math.floor(Math.random() * 6) + 1;

var randomImage ="images/" + "dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage)



var randomNumber2 = 
    Math.floor(Math.random() * 6) + 1;

var randomImage2 ="images/" + "dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2)


if (randomNumber1>randomNumber2) {

    document.getElementById('title').innerHTML = "Player 1 Win!"
   
}
else if (randomNumber1<randomNumber2) {
    document.getElementById('title').innerHTML = "Player 2 Win!"

}
else{
    document.getElementById('title').innerHTML = "DRAW"  
}



}