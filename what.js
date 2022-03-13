window.onload = function(){

document.querySelector('#no').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
})

document.querySelector('#yes').addEventListener("click" , function(){
    document.querySelector('#confirm').style.opacity = '0';
    document.querySelector("audio").play();
})
}
        function picture(){ 
        var pic = "https://pbs.twimg.com/media/FMVdxo8VkAAfn3N?format=jpg&name=900x900"
        document.getElementById('bigpic').src = pic.replace('90x90', '225x225');

        }