let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); // renderiza o desenho de canvas
let box = 32;

function criarBG(){ // funcao que cria o Background
    context.fillStyle = "yellow"; 
    context.fillRect(0, 0, 16*box, 16*box); //desenha o nosso rectângulo usando x e y ; altura e largura iniciadas
}
    criarBG();