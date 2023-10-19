// use an array to represent the two players we have in the game 
// we're only gonna play one time and the players will never change 

const players = [
    {name: "Kween", symbol: "X"}
] // two objects each has a name and a symbol

console.log(players.push({name: "Paislee", symbol: "O"}));

console.log(players);

console.log(players.length);

// to select all the squares
// document.querySelectorAll(.square)
// document.getElementByClassName("square")
const squares = document.querySelectorAll(".square"); // to create a squares array 
squares[4].textContent = "X";
squares[0].textContent = "O";
squares[1].textContent = "X";
squares[3].textContent = "O";
squares[2].textContent = "X";
squares[5].textContent = "O";
squares[6].textContent = "X";
squares[7].textContent = "O";
squares[8].textContent = "X";

//squares[0].textContent = players[1].symbol;