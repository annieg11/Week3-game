<script type="text/javascript">

var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerGuess =letters;
var win =0;
var losses =0;
var guessesLeft = 10;
  // Create code to randomly choose one of the letter options (Computer) 
computerGuess = letters[Math.floor(Math.random()*letters.length)];
var userTries = "User Tries: ";
          
        document.onkeyup = function(event) {
          // coverting user guess to lower case
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            userTries=userTries+userGuess+",";
            guessesLeft = guessesLeft - 1;
            
            
            if (userGuess == computerGuess){
              // if the user wins increase win count by 1
                win = win + 1;
                guessesLeft = 10;
                userTries = "User Tries: ";
                computerGuess = letters[Math.floor(Math.random()*letters.length)];
                var winMessage = "Wins: " + win;             
                alert(' Voila!!!!You Won!!! Guess the next letter ');  
                document.getElementById("wins").innerHTML= winMessage;
            }else if (guessesLeft==0){
              // if user looses then increase losses count by 1
                losses = losses +1;
                // to reset the guesses left 
                guessesLeft = 10;
                userTries = "User Tries: ";
                computerGuess = letters[Math.floor(Math.random()*letters.length)];
                var lossesMessage = "Losses: " + losses;       
                alert('Oops!!!You Lost! Guess the next letter');                 
                document.getElementById("losses").innerHTML= lossesMessage;
            }
          var guessesLeftMessage = "Guesses Left: " + guessesLeft;
          document.getElementById("guessesleft").innerHTML= guessesLeftMessage;
          document.getElementById("usertries").innerHTML= userTries;
          document.querySelector('#game').innerHTML = html; 
        }
</script>


