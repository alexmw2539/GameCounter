var alex1Wins = 0;
var dadWins = 0;
var draws1 = 0;
var totals1 = 0;
var alex2Wins = 0;
var momWins = 0;
var draws2 = 0;
var totals2 = 0;
// adding
function buttonClickAlex1Add() {
    alex1Wins++;
        document.getElementById('playerAlex1Wins').value = alex1Wins;
        console.log("Button clicked, id ", alex1Wins)
}

function buttonClickDadAdd() {
    dadWins++;
        document.getElementById('playerDadWins').value = dadWins;
        console.log("Button clicked, id ", dadWins)
}
function buttonClickDradws1Add() {
    draws1++;
        document.getElementById('playerDraws1').value = draws1;
        console.log("Button clicked, id ", draws1)
}
function buttonClickTotals1Add() {
    totals1++;
        document.getElementById('playerTotals1').value = totals1;
        console.log("Button clicked, id ", totals1)
}
function buttonClickAlex2Add() {
    alex2Wins++;
        document.getElementById('playerAlex2Wins').value = alex2Wins;
        console.log("Button clicked, id ", alex2Wins)
}
function buttonClickMomAdd() {
    momWins++;
        document.getElementById('playerMomWins').value = momWins;
        console.log("Button clicked, id ", momWins)
}
function buttonClickDradws2Add() {
    draws2++;
        document.getElementById('playerDraws2').value = draws2;
        console.log("Button clicked, id ", draws2)
}
function buttonClickTotals2Add() {
    totals2++;
        document.getElementById('playerTotals2').value = totals2;
        console.log("Button clicked, id ", totals2)
}
// subtracting
function buttonClickAlex1Minus() {
    alex1Wins--;
        document.getElementById('playerAlex1Wins').value = alex1Wins;
        console.log("Button clicked, id ", alex1Wins)
}
function buttonClickDadMinus() {
    dadWins--;
        document.getElementById('playerDadWins').value = dadWins;
        console.log("Button clicked, id ", dadWins)
}
function buttonClickDraws1Minus() {
    draws1--;
        document.getElementById('playerDraws1').value = draws1;
        console.log("Button clicked, id ", draws1)
}
function buttonClickTotals1Minus() {
    totals1--;
        document.getElementById('playerTotals1').value = totals1;
        console.log("Button clicked, id ", totals1)
}
function buttonClickAlex2Minus() {
    alex2Wins--;
        document.getElementById('playerAlex2Wins').value = alex2Wins;
        console.log("Button clicked, id ", alex2Wins)
}
function buttonClickMomMinus() {
    momWins--;
        document.getElementById('playerMomWins').value = momWins;
        console.log("Button clicked, id ", momWins)
}
function buttonClickDraws2Minus() {
    draws2--;
        document.getElementById('playerDraws2').value = draws2;
        console.log("Button clicked, id ", draws2)
}
function buttonClickTotals2Minus() {
    totals2--;
        document.getElementById('playerTotals2').value = totals2;
        console.log("Button clicked, id ", totals2)
}