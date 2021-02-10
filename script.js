// variaveis globais
let canvas = document.getElementById("snake"); //criar elemento que irá rodar o game
let context = canvas.getContext("2d"); // renderiza o desenho de canvas
let box = 32;
let direction = "right";  // variavel definida para orientar os movimentos da cobra
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
let game = setInterval(startGame, 120); // passando intervalo de 100ms para renovar
document.addEventListener('keydown', update); // eventos de clique do botao

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// array de definicao de coordenadada da cobra
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

// funcao que cria o Background
function createBG(){ 
    context.fillStyle = "yellow";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o nosso rectângulo usando x e y ; altura e largura iniciadas
}

// funcao que desenha a cobra em uma iteracao
function createSnake (){ 
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// funcao que desenhar a comida da cobra
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// funcao que movimenta a cobra 
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

// funcao que permite a cobra iniciar em outro extremo 
function borderless(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;
}

// funcao que permite a cobra movimentar 
function snakeMoves(){
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // movimentos da cobra
        if(direction == "right") snakeX += box;     // acrescenta coordenada para direita
        if(direction == "left") snakeX -= box;      // decresce coordenada para esquerda
        if(direction == "up") snakeY -= box;        //  decresce coordenada para cima
        if(direction == "down") snakeY += box;      // acrescenta coordenada para baixo

        // cobra come a fruta e aumenta tamanho
        if(snakeX != food.x || snakeY != food.y){
            snake.pop();
        }

        let newHead = {  
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead); 
}

function startGame(){

    // chamada de funcoes
    borderless();
    createBG();
    createSnake();
    snakeMoves();
    drawFood();

}

