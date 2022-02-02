const bigCircle = document.querySelector(".bigCircle");
const smallCircle = document.querySelector(".smallCircle");
const zone = document.querySelector(".left");

zone.addEventListener('mousemove', move);
zone.addEventListener("mouseleave",leave);

function move(e){
    var x = e.clientX;
    var k = x+"px";
    console.log(k);
    bigCircle.style.left = 50+x/20+"px"; 
    smallCircle.style.left = 450-x/10+"px"; 
}
function leave(e){
    bigCircle.style.left = 50+"px"; 
    smallCircle.style.left = 450+"px";
    smallCircle.style.transition = "0.5s";
    bigCircle.style.transition = ".5s";
}
