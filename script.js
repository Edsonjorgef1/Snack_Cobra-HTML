// variaveis 
let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); // renderiza o desenho de canvas
let box = 32;
let direction = "right";  // variavel definida para orientar os movimentos da cobra
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}


function criarBG(){ // funcao que cria o Background
    context.fillStyle = "yellow"; 
    context.fillRect(0, 0, 16*box, 16*box); //desenha o nosso rectângulo usando x e y ; altura e largura iniciadas
}

function criarCobrinha (){ // funcao que desenha a cobra em uma iteracao
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){

    // chamada de funcoes
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // movimentos da cobra
        if(direction == "right") snakeX += box;     // acrescenta coordenada para direita
        if(direction == "left") snakeX -= box;      // decresce coordenada para esquerda
        if(direction == "up") snakeY -= box;        //  decresce coordenada para cima
        if(direction == "down") snakeY += box;      // acrescenta coordenada para baixo

        snake.pop();  
        
        let newHead = {  
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead); 

}

let jogo = setInterval(iniciarJogo, 100); // passando intervalo de 100ms para renovar


