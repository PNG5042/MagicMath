// HW 5 Bot code
// Name: Adison Daggett
// Date: 5/6/24
// All code must be commented. for some reason

let goalNumber;
let currentNumber;
let operatorSelected = false;
let winCount = 0;
let lossCount = 0;
let result = null;

let turncount = 3; //Decrement each turn until conditional is false

//Generates a number between a min and max (done)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//done
//function that generates a number between 1 and 9 for the buttons
function updateButton(buttonId) {
  var button = document.getElementById(buttonId);
  button.innerText = getRandomNumber(1, 9);
}

//Function to start a new game
function newGame() {
  goalNumber = getRandomNumber(2, 10);
  currentNumber = goalNumber;
  document.getElementById('goalNumber').textContent = goalNumber;
  operatorSelected = false;
  
  //HTML update here
  updateButton("button1");
  updateButton("button2");
  updateButton("button3");
  updateButton("button4");
}
//event buttons (done)
document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("workspace").innerText += document.getElementById("number1").innerText;
  updateEquationDisplay(document.getElementById("number1").innerText);
});

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("workspace").innerText += document.getElementById("number2").innerText;
  updateEquationDisplay(document.getElementById("number2").innerText);
});

document.getElementById("button3").addEventListener("click", function() {
  document.getElementById("workspace").innerText += document.getElementById("number3").innerText;
  updateEquationDisplay(document.getElementById("number3").innerText);
});

document.getElementById("button4").addEventListener("click", function() {
  document.getElementById("workspace").innerText += document.getElementById("number4").innerText;
  updateEquationDisplay(document.getElementById("number4").innerText);
});

//handling the math (done???)
function handleOperatorClick(operator) {
  if (operatorSelected) {
    const firstNumber = parseInt(document.getElementById("Numbers").innerText);
    const secondNumber = parseInt(document.getElementById("workspace").innerText); // get the second number from the workspace
    // perform calculation based on operator
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "x":
        result = firstNumber * secondNumber;
        break;
    }
    // Update the display to show the result of the calculation
    document.getElementById("Numbers").innerText = result;
    document.getElementById("equation").innerText = "";
    //generate new random numbers for the buttons
    updateButton("button1");
    updateButton("button2");
    updateButton("button3");
    updateButton("button4");
  //check if the player wins
    turncount--
    checkGameOver();
  }
}

//equation display stuff (done)
function equationDisplay() {
  if(operatorSelected){
    document.getElementById("equation").innerText = '${number} ${operatorSelected};';
  } else {
    document.getElementById("equation").innerText = number;
  }
}

function updateEquationDisplay(number) {
  if(operatorSelected){
    document.getElementById("equation").innerText += number;
  } else {
    document.getElementById("equation").innerText = number;
  }
}

// Function to check if the game is over (changed by PNG)
function checkGameOver() {
  if (currentNumber === goalNumber) {
    winCount++;
    document.getElementById('Wins').textContent = winCount;
    alert("You Win!");
    newGame(); //Start a new game after winning
  } else if (turncount === 0) {
      lossCount++;
      document.getElementById('Losses').textContent = lossCount;
      alert("You Lose...");
      newGame(); //Start a new game after losing
  }
}

//Function to handle new game button click (mostly done)
function handleNewGameClick() {
  newGame();
  //update HTML here
  document.getElementById('newGameButton').textContent = 'New Game';
  document.getElementById("workspace").innerText = ""
}
// //Call newGame to start the first game
newGame();
