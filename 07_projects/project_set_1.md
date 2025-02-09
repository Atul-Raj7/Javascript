# Projects related to doms

## Project Link
[Cilck me](https://stackblitz.com/edit/dom-project-chaiaurcode-ryshjrvd?file=index.html)

# Solution Code

## Solution 1

```javascript
// Log a message to the console (for debugging or confirmation purposes)
console.log('Atul Raj');

// Select all elements with the class 'button' and store them in a NodeList
const buttons = document.querySelectorAll('.button');

// Select the body element, which will be used to change the background color
const body = document.querySelector('body');

// Loop through each button in the NodeList
buttons.forEach(function (button) {
  // Log each button to the console (to verify selection)
  console.log(button);

  // Add a click event listener to the current button
  button.addEventListener('click', function (e) {
    // Log the event object to the console
    console.log(e);

    // Log the target element of the event (the button that was clicked)
    console.log(e.target);

    // Use a switch statement to change the background color based on the button's ID
    switch (e.target.id) {
      case 'grey': // If the button's ID is 'grey'
        body.style.backgroundColor = e.target.id; // Set the background color to grey
        break; // Exit the switch block
      case 'white': // If the button's ID is 'white'
        body.style.backgroundColor = e.target.id; // Set the background color to white
        break; // Exit the switch block
      case 'blue': // If the button's ID is 'blue'
        body.style.backgroundColor = e.target.id; // Set the background color to blue
        break; // Exit the switch block
      case 'yellow': // If the button's ID is 'yellow'
        body.style.backgroundColor = e.target.id; // Set the background color to yellow
        break; // Exit the switch block
      case 'purple': // If the button's ID is 'purple'
        body.style.backgroundColor = e.target.id; // Set the background color to purple
        break; // Exit the switch block
    }
  });
});

```

## Solution 2
```javascript
// Select the form element from the document
const form = document.querySelector('form');

// Add an event listener to handle the form submission
form.addEventListener('submit', function(e) {
  // Prevent the default form submission behavior (reloading the page)
  e.preventDefault();

  // Get the height input value and convert it to an integer
  const height = parseInt(document.querySelector('#height').value);

  // Get the weight input value and convert it to an integer
  const weight = parseInt(document.querySelector('#weight').value);

  // Select the results container where the BMI or error message will be displayed
  const results = document.querySelector('#results');

  // Validate the height input
  if (height === '' || height < 0 || isNaN(height)) {
    // If the height is empty, negative, or not a number, display an error message
    results.innerHTML = 'Please give a valid height';
  } 
  // Validate the weight input
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    // If the weight is empty, negative, or not a number, display an error message
    results.innerHTML = 'Please give a valid weight';
  } 
  // If both inputs are valid, calculate and display the BMI
  else {
    // Calculate BMI using the formula: BMI = weight / (height in meters)^2
    // Convert height from cm to meters by dividing by 10000, and round to 2 decimal places
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the calculated BMI in the results container
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Solution 3 
```javascript
// Select the element with the ID 'clock' where the time will be displayed
const clock = document.getElementById('clock');
// Alternatively, you can use querySelector: 
// const clock = document.querySelector('#clock');


// const clock = document.querySelector('#clock')

// console.log(date.toLocaleTimeString())


// Update the clock every second using setInterval
setInterval(function(e) {
  // Create a new Date object to get the current date and time
  let date = new Date();

  // Extract the current time as a string in a localized format (e.g., HH:MM:SS AM/PM)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // The interval is set to 1000 milliseconds (1 second)

```

## Solution 4
```javascript
// Generate a random number between 1 and 100 (inclusive)
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select various elements from the DOM for interaction
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for user guesses
const guessSlot = document.querySelector('.guesses'); // Display for previous guesses
const remaining = document.querySelector('.lastResult'); // Display for remaining guesses
const lowOrHi = document.querySelector('.lowOrHi'); // Message for high/low hints
const startOver = document.querySelector('.resultParas'); // Container to show the "Start New Game" button

// Create a paragraph element to hold the "Start New Game" button later
const p = document.createElement('p');

// Array to track previous guesses
let prevGuess = [];

// Counter for the number of guesses
let numGuess = 1;

// Boolean to control the game state
let playGame = true;

// Add event listener to the submit button if the game is active
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission behavior
    const guess = parseInt(userInput.value); // Parse the user's input as an integer
    console.log(guess); // Log the guess for debugging
    validateGuess(guess); // Validate and process the guess
  });
}

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number'); // Handle non-numeric input
  } else if (guess < 1) {
    alert('Please enter a number greater than 1'); // Handle numbers less than 1
  } else if (guess > 100) {
    alert('Please enter a number less than 100'); // Handle numbers greater than 100
  } else {
    prevGuess.push(guess); // Add the guess to the array of previous guesses
    if (numGuess === 11) {
      // If it's the 11th guess, the game ends
      displayGuess(guess);
      displayMessage(`Game Over. Random number was: ${randomNumber}`);
      endGame(); // End the game
    } else {
      displayGuess(guess); // Display the current guess
      checkGuess(guess); // Check if the guess is correct, too high, or too low
    }
  }
}

// Check if the guess matches the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You Guessed it right!!!'); // Correct guess message
    endGame(); // End the game on a correct guess
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low!!!'); // Hint for a low guess
  } else if (guess > randomNumber) {
    displayMessage('Number is TOO high!!!'); // Hint for a high guess
  }
}

// Display the guess and update the remaining guesses
function displayGuess(guess) {
  userInput.value = ''; // Clear the input field
  guessSlot.innerHTML += `${guess}, `; // Append the guess to the display
  numGuess++; // Increment the guess counter
  remaining.innerHTML = `${11 - numGuess}`; // Update the remaining guesses
}

// Display a message (e.g., hints or game over message)
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message in the lowOrHi container
}

// End the game and display a "Start New Game" button
function endGame() {
  userInput.value = ''; // Clear the input field
  userInput.setAttribute('disabled', ''); // Disable the input field
  p.classList.add('button'); // Style the "Start New Game" button
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>'; // Add the button's HTML
  startOver.appendChild(p); // Append the button to the startOver container
  playGame = false; // Set the game state to inactive
  newGame(); // Initialize the new game setup
}

// Set up a new game when the "Start New Game" button is clicked
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Select the "Start New Game" button
  newGameButton.addEventListener('click', function (e) {
    // Reset the game state and UI
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuess = []; // Clear the array of previous guesses
    numGuess = 1; // Reset the guess counter
    guessSlot.innerHTML = ''; // Clear the previous guesses display
    remaining.innerHTML = `${11 - numGuess}`; // Reset the remaining guesses
    userInput.removeAttribute('disabled', ''); // Enable the input field
    startOver.removeChild(p); // Remove the "Start New Game" button
    playGame = true; // Set the game state to active
  });
}

```

## Solution 5
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

## Solution 6
```javascript
const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

const changeColor = function(){ document.querySelector('body').style.backgroundColor = randomColor()}
// const stopChange 
let a
document.getElementById('start').addEventListener('click', function(){
  if(!a){
  a = setInterval(changeColor,500)
  }
})
document.getElementById('stop').addEventListener('click', function(){
  clearInterval(a)
  a = null
})
```