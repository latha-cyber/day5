let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");
let guessCount=document.getElementById("guessCount");
let a= 5;
let noOfGuess=3
function checkNumber(){
    if(inputBox.value == 5){
        alert("You are right");
        result.textContent="Right"
    }
    else{
        noOfGuess--
        guessCount.textContent ="Available guess:"+ noOfGuess
        result.textContent="wrong"
        if (noOfGuess==0){
            alert("You lost the game: "+ randomNumber); 
        }
        
    }
}