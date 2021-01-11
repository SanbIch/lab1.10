let ctx;
let currentField = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let turn = true;           // кто ходит     true - X    false - O
let winStatus = 0;         // 0 - игра продолжается 1 - крестики 2 - нолики 3 - ничья
let score = [0,0];         // счёт
let firstPlayerCount = document.getElementById("firstResult")
let secondPlayerCount = document.getElementById("secondResult")
let currentTurn = document.getElementById("turn");
const winX = ["X", "X", "X"];
const win0 = ["0", "0", "0"];

function drawField() 
{
	let canvas = document.getElementById("ticTacToe");
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = "250pt Arial";
    ctx.lineWidth = 40;
    ctx.beginPath()
    ctx.moveTo(canvas.width/3, 0); 
    ctx.lineTo(canvas.width/3, canvas.height); 
    ctx.moveTo(canvas.width/3*2, 0); 
    ctx.lineTo(canvas.width/3*2, canvas.height); 
    ctx.moveTo(0, canvas.height/3); 
    ctx.lineTo(canvas.width, canvas.height/3);
    ctx.moveTo(0, canvas.height/3*2); 
    ctx.lineTo(canvas.width, canvas.height/3*2); 
    ctx.stroke();
}
