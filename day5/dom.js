let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");
let guessCount=document.getElementBy("guessCount");
let randomNumber=Math.floor(Math.random()*10);
console.log(randomNumber);

let noOfGuess=3
function checkNumber(){
    if(inputBox.value == randomNumber){
        alert("You are right");
        result.textContent="Right"
    }
    else{
        noOfGuess--
        
        if (noOfGuess=0){
            alert("You lost the game: "+ randomNumber); 
        }
        else{
            console.log("game over");
        }
        guessCount.textContent ="Available guess:"+ noOfGuess
        result.textContent="wrong"
    }
}