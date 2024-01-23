var timer=60;
var score =0;
var hitrn=0;

function makescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function makebubble(){
    var clutter="";

for(var i=0;i<102;i++){
    var rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML=clutter;
}
function getnewhit(){
     hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function runtimer(){
    var timerint =setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerT").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=" <h2> GAME OVER</h2>";
        }
    } ,1000)
}
document.querySelector("#pbtm")
.addEventListener("click", function(event){
    var check = Number(event.target.textContent);
    if(check === hitrn){
        makescore();
        makebubble();
        getnewhit();
    }
} );
// makescore();
getnewhit();
runtimer();
makebubble();