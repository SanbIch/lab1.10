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

function drawO(x, y) 
{
    x += 250;
    y -= 300;
    let r = 250;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 80;
    ctx.arc(x, y, r, 2 * Math.PI, false);
    ctx.stroke();
}

function drawX(x, y) 
{
    let num = 500;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 80;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + num, y - num);
    ctx.moveTo(x + num, y);
    ctx.lineTo(x, y - num);
    ctx.stroke();
}

function drawXO( i, j)
{
    switch(currentField[j][i]) 
    {
        case "X":
            drawX(i*700+100, j*700+600);
            break;
        case "0":
            drawO(i*700+100, j*700+650);
            break;
    }
	checkWinStatus();

    if (winStatus == 0) 
    {
        turn = !turn;
		if (turn) currentTurn.innerHTML="первый игрок - X";
		else currentTurn.innerHTML="второй игрок - O";
	}
}

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

function canvasClickOn(event)
{
	let canvas = document.getElementById("ticTacToe");
	let target = canvas.getBoundingClientRect();

    let mouse_coords = 
    {
        x: event.clientX - target.left, 
        y: event.clientY - target.top
    }

	let i = Math.ceil(mouse_coords.x / (canvas.scrollWidth / 3) %3) - 1;
    let j = Math.ceil(mouse_coords.y / (canvas.scrollHeight / 3) %3) - 1;

    if (!currentField[j][i] && !winStatus) 
    {
		currentField[j][i] = (turn)?"X":"0";
		drawXO( i, j);
	}
}
