

// var alphabets =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var coolMovies =["twlight","gladiator","inception","taken","thor","transformers","avatar","jumanji","twister","elizabeth","armageddon"]
var userGuessedLetters = "User Guessed Letters: ";
var wrongLetterCount=1;
var word;
var numLives =6;
// Choosing a random word from the Array!!
 word =coolMovies[Math.floor(Math.random()* coolMovies.length)]; 
 // Makes a new array of that random word to that words length.
var newWord=new Array(word.length);
// makes a for loop which iterates through the word length.
for(var j=0;j<word.length;j++){
  // this new word gives number of dashes for each letter of the  random word,acting as a placeholder.
       newWord[j] = '_';
      }
      // We make a variable which gives the html id plus the newWord to print the message on the browser.
      var coolMoviesMessage ="Cool Movies: " + newWord;
          document.getElementById("movieName").innerHTML= coolMoviesMessage;

 document.onkeyup = function(event) {
 // converting the usserguess letter to a lowercase.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // we are initialing the guess variable in this.
    var guess=false;
    // make for loop 
    for(var i= 0; i<word.length;i++){
          // this statement says that if word chosen is equal to the userguessed letter,new word is usereguessed letter then guess is true,hence the word and usererguessed letter is true.
        if(word[i]===userGuess){
                newWord[i]=userGuess;
                guess =true;
              }
        }
          // if guess is not true we decresse the number of lives.
    if(!guess){
            numLives=numLives-1;
            wrongLetterCount=wrongLetterCount+1;
            // we print userguessed letter.
            userGuessedLetters=userGuessedLetters+userGuess+" ";
        }
        // we are getting the cool movies message by getting the id from html.
        var coolMoviesMessage ="Cool Movies: " + newWord;
        document.getElementById("movieName").innerHTML= coolMoviesMessage;
        // this tells us about number of lives the user has and gets th id from html,hence updating its value
        var numLivestMessage = "Lives Left: "+numLives;
        document.getElementById("numlives").innerHTML= numLivestMessage;
            // we are getting id for the user guessed letter from html hence updating its value
        document.getElementById("userGuessedLetters").innerHTML= userGuessedLetters;  
   if(numLives==0){
        alert('Oops!!!You Lost! You almost got Hanged!!!Guess the next Movie');
        location.reload(true);
      }
  var correctLetter=true;
  for(var i= 0; i<word.length;i++){
      if(newWord[i]=="_"){
        correctLetter=false;
      }
    }
    if(correctLetter){
        alert(' Voila!!!!You Won!!! Guess the next Movie! '); 
        location.reload(true);   
      }
    document.querySelector('#game').innerHTML = html;        
 }