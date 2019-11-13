let userName = prompt(' What is the player name?');
let options =['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount =0;
let roundplay = (computerSelection, playerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        let playerScore = `You Win!!! ${playerSelection} beats ${computerSelection}`;
        playerCount ++;
        return playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors'){
        let computerScore = 'You loose!!!';
        computerCount ++;
        return computerScore;
    } else if (playerSelection === computerSelection) {
        return `Tie!!! Computer choose ${computerSelection}`;
} else return alert('Please this field is required for you to cotinue the game.')
};

let game = () => {
let computerplay = Math.floor(Math.random() * options.length);
let computerSelection = () => {
    return options[computerplay];
    }
    if (playerCount + computerCount === 5){
        if(playerCount > computerCount){
            alert(`Congratulations ${userName}, You won the game!!!`);
        } else {
            alert(`Sorry ${userName}, Computer Won!!!`);
            location.reload(true);
        } 
       

    }

    question = prompt('Please enter your choice of either Rock, Paper, or Scissors!');
    choice = question.toLowerCase();
    console.log(roundplay(computerSelection(), choice));
    console.log(`Your score is ${playerCount}`);
    console.log(`Computer score is ${computerCount}`);

};
game()