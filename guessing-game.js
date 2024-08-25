function guessingGame() {
    // Initialize the game state
    let targetNumber = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let gameEnded = false;
    
    return function(guess) {
      if (gameEnded) {
        return "The game is over, you already won!";
      }
      
      guessCount++;
      
      if (guess < targetNumber) {
        return `${guess} is too low!`;
      } else if (guess > targetNumber) {
        return `${guess} is too high!`;
      } else {
        gameEnded = true;
        return `You win! You found ${targetNumber} in ${guessCount} guesses.`;
      }
    };
  }
  
module.exports = { guessingGame };
