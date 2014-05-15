// Functions that should run when the user clicks 'new game' link

// start the game timer
// show next element in arrayElements
// add same/different links
var element = 0;

function incrementElement(){
  $("#elementDiv").empty();
  $("#elementDiv").append(arrayElements[element++]);
}

function clearScores() {
  points = 0;
  correctGuesses = 0;
  incorrectGuesses = 0;
  $("#answered, #correct, #incorrect").empty();
}

function NewGame(){
  $("#new").click(function(event) {
      event.preventDefault();
      clearScores();
      $("#sameDiv, #differentDiv").show();
      $("#newDiv").hide();
      $("#points").append("Score: " + points + " points");
      arrayUserInputs = new Array();
      CreateTimer("timer", 60);
      incrementElement();
    });
}

// listen for s/d/same/different click and add user input on click as true/false to UserInputArray
// remove these links when time remaining is 0 - see timer.js Countdown function

function AddSameGuess(){

  $("#same").on('click', function(event){
    event.preventDefault();
    arrayUserInputs.push(true);
    EmptyDivsIncrementElementUpdateScore();
  });
}

function AddDiffGuess(){

  $("#different").on('click', function(event){
    event.preventDefault();
    arrayUserInputs.push(false);
    EmptyDivsIncrementElementUpdateScore();
  });
}

// refactored - sorry for the long function name ^_^
function EmptyDivsIncrementElementUpdateScore(){
  incrementElement();
  $("#points, #answered, #correct, #incorrect").empty();
  UpdateScore();
}

// match user input to answer key, when user input matches correct answer +10 points and whenever user input doesn't match correct answer -5 points, finally show next arrayElements element

function UpdateScore(){
  clearScores();
  var index;
  for (index = 0; index < arrayUserInputs.length; ++index) {
    if (arrayUserInputs[index] == answerKey[index+1]) {
      points = points + 10;
      correctGuesses = correctGuesses + 1;
    } else {
      points = points - 5
      incorrectGuesses = incorrectGuesses + 1;
    }
  }
  $("#points").append("Score: " + points + " points");
  $("#answered").append("Total Guesses: " + (correctGuesses+incorrectGuesses))
  $("#correct").append("Correct: " + correctGuesses)
  $("#incorrect").append("Incorrect: " + incorrectGuesses)
}
