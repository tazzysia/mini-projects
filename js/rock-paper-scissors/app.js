const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let yourChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',e => {
      yourChoice = e.target.id;
      yourChoiceDisplay.innerHTML = yourChoice;
      generateComputerChoice();
      showresult();
    }))
 
    let computerChoice;
    function generateComputerChoice(){
      
      const randomNumber =Math.floor(Math.random() * possibleChoices.length )
      
      if(randomNumber === 1){
        computerChoice ='rock';
      }
      if(randomNumber === 2){
        computerChoice ='paper';
      } 
      if(randomNumber === 3){
        computerChoice ='scissors';
      }
        computerChoiceDisplay.innerHTML = computerChoice;
    }   

    let result;
    function showresult(){
      
      if (computerChoice === yourChoice){
        result ='Draw!'
      }
      if (computerChoice === 'rock' && yourChoice === 'paper' ){
        result ='Win!'
      }
      if (computerChoice === 'rock' && yourChoice === 'scissors'){
        result ='Lose!'
      }
      if (computerChoice === 'paper' && yourChoice === 'rock'){
        result ='Lose!'
      }
      if (computerChoice === 'paper' && yourChoice === 'scissors'){
        result ='Win!'
      }
      if (computerChoice === 'scissors' && yourChoice === 'rock'){
        result ='Win!'
      }
      if (computerChoice === 'scissors' && yourChoice === 'paper'){
        result ='Lose!'
      }
        resultDisplay.innerHTML = result;
    }