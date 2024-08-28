function getComputerChoice(){
    var a=  Math.floor(Math.random()*3);
    if(a==0){
      return "rock";
    }
    else if(a==1){
      return "paper";
    }
    else{
      return "scissor";
    }
}

function playRound(computerChoice,humanChoice){
    ans = "";
    if(computerChoice == humanChoice ){
      ans = "Both picked the same "+humanChoice;
    }
    else if((computerChoice =="rock" && humanChoice =="paper")||(computerChoice=="paper" && humanChoice=="scissor")||(computerChoice=="scissor" && humanChoice=="rock")){
      ans ="You Win! "+humanChoice +" beats "+computerChoice;
      playerScore+=1;
    }
    else{
      computerScore+=1;
      ans = "You lose! "+computerChoice +" beats "+humanChoice;
    }
    
    return ans;
}
function game(){
  para.textContent="";
  let humanChoice= document.querySelector('input[name=selection]:checked').id;
  var textOutput = playRound(getComputerChoice(),humanChoice)
  outputStatement.textContent = textOutput;
    outputScore.textContent=`Computer score: ${computerScore}  Player score: ${playerScore}`;
  if(playerScore==3){
    para.textContent = "You Win!!🎉";
    playerScore=0;
    computerScore=0;
  }
  else if(computerScore==3){
    para.textContent ="You lose bot!!🤖";
    playerScore=0;
    computerScore=0;
  }
}

let playerScore = 0;
let computerScore = 0;

const btn = document.querySelector("#playbutton");
btn.addEventListener("click",game);

const outputStatement = document.querySelector(".output div");
const outputScore = document.querySelector(".output p");
const para = document.createElement("p");
outputScore.parentNode.appendChild(para);

