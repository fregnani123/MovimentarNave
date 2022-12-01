var dx;
var dy;
var px;
var py;
var obj;
var tmp;
var vel;
var tmp;
dx=0;
dy=0;
px=0;
py=0;
vel=1; 

document.addEventListener("keydown", direcao);
document.addEventListener("keyup",direcao2)
var obj = document.querySelector("#nave");
tmp=setInterval(enterFrame,0)

function direcao (event){
    if (event.key === "a") { 
        dx = -1;
    } else if (event.key === "w") {
        dy = -1
    } else if (event.key === "d") {
        dx = 1;
    } else if (event.key === "s") {
        dy = 1;
    }  
}
function direcao2 (event){
    if (event.key === "a") { 
        dx = 0;
    } else if (event.key === "w") {
        dy = 0
    } else if (event.key === "d") {
        dx = 0;
    } else if (event.key === "s") {
        dy = 0;
    } 
}

function enterFrame(){
    px+=dx*vel;
    py+=dy*vel;
    obj.style.left= px+"px";
    obj.style.top=py+"px"
}