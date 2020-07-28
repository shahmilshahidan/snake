const canvas = document.getElementById("snakeCage");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height / 2;
const box = 32;

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

function food(){
    let pellet = {
        x: Math.floor(Math.random()*17+1) * box,
        y: Math.floor(Math.random()*15+3) * box
    };
}

let score = 0;
function score(){
    ctx.font = "22px Sans Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: " + score, 10, 10);
}

let d;
document.addEventListener("keydown", controlSnake);
function controlSnake(){
    let key = event.keyCode;
    if(key == 37 && key != "RIGHT"){
        d = "LEFT";
    }
    else if(key == 38 && key != "DOWN"){
        d = "UP";
    }
    else if(key == 39 && key != "LEFT"){
        d = "RIGHT";
    }
    else if(key == 40 && key != "UP"){
        d = "DOWN";
    }
}