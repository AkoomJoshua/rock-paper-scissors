const game = () =>{
  let pScore = 0;
  let cScore = 0;

  const startGame =() => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", ()=> {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //play Match 
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-Hand");
    const computerHand = document.querySelector(".computer-Hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand =>{
      hand.addEventListener("animationend", function(){
         this.style.animation ="";
        });
    });
    //computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option =>{
      option.addEventListener("click", function(){
        //computer choice
        const computerNumber = Math.floor(Math.random() *3); 
        const computerChoice = computerOptions[computerNumber];
     
        setTimeout(() => { 
          //here is where we call compare hands 
          compareHands (this.textContent, computerChoice);
          //update Images
          playerHand.src = `./assets/${this.textContent}.png`
          computerHand.src = `./assets/${computerChoice}.png`
        }, 2000);
        //animations
        //playerHand.style.animation = "shakePlayer 2s ease";
        //computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore =()=>{
      const playerScore =document.querySelectorAll(".player-score p");
      const computerScore =document.querySelectorAll(".computer-score p");
      playerScore.textContent= pScore;
      computerScore.textContent=cScore;
  };

  const compareHands =( playerChoice, computerChoice) =>{
    //update text
    const winner = document.querySelectorAll('.winner');
    //checking for a tie
    if (playerChoice === computerChoice){
      winner.textContent = "It is a tie";
      return; 
    }
    //checking for a rock
    if (playerChoice ==="rock"){

         
      if (computerChoice === "scissors"){
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent ="Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //check for paper
    if (playerChoice === "paper") { 
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent="player wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //check for Scissors
    if (playerChoice === "scissors"){
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
      else{
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }; 
    };
  };
  //is call all the inner function
  startGame();
  playMatch();
  updateScore();
  compareHands();
};
//start the game function
game();