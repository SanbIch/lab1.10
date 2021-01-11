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
