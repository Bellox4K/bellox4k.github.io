window.onload = function(){

document.querySelector('#no').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
})

document.querySelector('#yes').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
    document.querySelector("audio").play();
})
}

var audio = new Audio("realdeal.mp3");

document.onclick = function() {
  audio.play();