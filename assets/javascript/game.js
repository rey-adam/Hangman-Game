
// list of word choices 
var cityLandMarks = ["paris", 
"rome", 
"manila", 
"beijing", 
"toronto", 
"vancouver", 
"london", 
"portland",
"seuol",
"tokyo",
"osaka",
"moscow",
"cairo",
"jakarta",
"lima",
"bangkok",
"singapore",
"petra",
"berlin",
"madrid",
"cairo",
"nairobi",
"harare"
];

var correctGuesses = [];
var incorreGuesses = [];
var remainingGuesses = 15;

// Wins: (# of times user guessed the word correctly).   // instructions delete later
var wins = 0;
var losses = 0;
var guessed = " already guessed, please try again...";
var validLetter = "Please enter a letter from A-Z";
var availableLetters = "abcdefghijklmnopqrstuvwxyz";

      var currentWord = cityLandMarks[Math.floor(Math.random()*cityLandMarks.length)];

      console.log(currentWord);


//   Press any key to get started! // instructions delete later
//click any key for the computer to select a random word from the choices 
  document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
      toLowerCase();

      console.log(userguess);

      //computer chooses a word 
		checkLetterInWord(userguess, currentWord);
      
  }

  function checkLetterInWord(letter, word){
	var n = word.search(letter);
	if (n === -1){
		console.log("letter is not word");

	}
	else {
		console.log ("letter is in a word");
	}
  }





// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.    // instructions delete later
	function displaySpacesForLetters(){
		//display underscore per letter


		//put this on the page
	}

// As the user guesses the correct letters, reveal them: m a d o _  _ a.    // instructions delete later
	function revealCorrectLetters(){
		//contain correct letters

		//contain spaces 
	}

// Number of Guesses Remaining: (# of guesses remaining for the user).    // instructions delete later

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).    // instructions delete later

// After the user wins/loses the game should automatically choose another word and make the user play it.    // instructions delete later
