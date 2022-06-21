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