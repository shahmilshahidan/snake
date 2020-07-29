const canvas = document.getElementById("snakeCage");
const ctx = canvas.getContext("2d");
const box = 16;

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random()*17+1) * box,
    y: Math.floor(Math.random()*15+3) * box
};

let score = 0;

let d;
document.addEventListener("keydown", controlSnake);
function controlSnake(event){
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


function collision(head, array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

function draw(){
    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = (i == 0) ? "green" : "brown";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // direction of the snake
    if(d == "LEFT") snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d == "DOWN") snakeY += box;

    // When snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x : Math.floor(Math.random() * 17+1) * box,
            y : Math.floor(Math.random() * 15+3) * box
        }
    }
    else{
        snake.pop();
    }

    // add new head
    let newHead = {
        x : snakeX,
        y : snakeY
    }

    // Check if game over
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
        document.location.reload();
        clearInterval(game);
    }

    snake.unshift(newHead);

    ctx.font = "22px Sans Serif";
    ctx.fillStyle = "#000000";
    ctx.fillText(score, 2*box, 1.6*box);
}

let game = setInterval(draw, 100);