document.getElementById('player').addEventListener("mouseenter",addScore);

// variables
let score = 0;
let time = 30;
let goal = 50;

function addScore(){
    score++;
    document.getElementById("score").innerHTML = "Score: " + score + "/" + goal;

    randNum1 = Math.round(Math.random()*540)
    document.getElementById('player').style.marginTop = randNum1 + "px";

    randNum2 = Math.round(Math.random()*540)
    document.getElementById('player').style.marginLeft = randNum2 + "px";

    if(score == goal){
        alert("Ganaste!! :D");
        location.reload();
    }
}


function spendTime(){
    time--;
    document.getElementById("time").innerHTML = "&nbsp;&nbsp;&nbsp; Time: " + time;

    if(time == 0){
        alert("Perdiste :C");
        location.reload();
    }
}
setInterval(spendTime,1000);