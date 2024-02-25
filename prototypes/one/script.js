const products = document.querySelectorAll('.product');
const controls = document.querySelectorAll('.controls ul li');

function changeProduct(event) {
  // Remove active class from all products and controls
  products.forEach((product) => {
    product.classList.remove('active');
  });
  controls.forEach((control) => {
    control.classList.remove('active');
  });
  
  // Set the clicked control as active
  event.target.classList.add('active');
  
  // Display the corresponding product
  const productId = event.target.innerText.split(' ')[1];
  const productIndex = productId - 1; // index starts from 0
  products[productIndex].classList.add('active');
}

// Set the first product and control as active by default
products[0].classList.add('active');
controls[0].classList.add('active');

// Add click event listeners to the controls
controls.forEach((control) => {
  control.addEventListener('click', changeProduct);
});

// Hi Lo game section
// generate a random number between 0 and 99
const randomNumber = Math.floor(Math.random() * 100);

// initialize the number of guesses made
let numGuesses = 0;

// define the maximum number of guesses allowed
const maxGuesses = 10;

// get references to the form and input element
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

// add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the user's guess from the input element
  let guess = parseInt(input.value);

  // if the guess is invalid, prompt the user to enter a valid guess
  if (isNaN(guess) || guess < 0 || guess > 99) {
    alert("Please enter a valid number between 0 and 99");
    return;
  }

  // increment the number of guesses made
  numGuesses++;

  // check if the guess is correct
  if (guess === randomNumber) {
    alert("Congratulations, you guessed the number in " + numGuesses + " guesses!");
    // disable the input and submit button
    input.disabled = true;
    this.querySelector('input[type="submit"]').disabled = true;
    return;
  }

  // provide a hint to the user
  const hint = guess < randomNumber ? "higher" : "lower";
  const guessesRemaining = maxGuesses - numGuesses;
  if (guessesRemaining === 0) {
    alert("Sorry, you ran out of guesses. The number was " + randomNumber + ".");
    // disable the input and submit button
    input.disabled = true;
    this.querySelector('input[type="submit"]').disabled = true;
    return;
  }
  input.value = ''; // clear input after every guess
  alert("Your guess is incorrect. Guess " + hint + ". You have " + guessesRemaining + " guesses remaining.");
});

