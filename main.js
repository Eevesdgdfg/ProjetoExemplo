var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var tamanho = screen.width;



if (tamanho < 992) {
    largura = screen.width - 70;
    altura = screen.height - 300;
    canvas.width = largura;
    canvas.height = altura;
    document.body.style.overflow = "hidden";
}





canvas.addEventListener("touchstart", tocar);

function tocar(e) {
    console.log("myTouchStart");
    //Início da Atividade Adicional
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

    //Fim da Atividade Adicional


    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;



}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) {

    console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    // mesmo código utilizado para a versão web
    ctx.beginPath();
    // ctx.strokeStyle = color;
    // ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;



    console.log("Última posição das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    // fim do mesmo código utilizado para a versão web
}

// mesmo código utilizado para a versão web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fim do mesmo código utilizado para a versão web
