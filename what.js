window.onload = function(){

document.querySelector('#no').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
    document.querySelector("audio").play();
})

document.querySelector('#yes').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
    document.querySelector("audio").play();
})
}