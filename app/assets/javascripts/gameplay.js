// Functions that should run when the user clicks 'new game' link

// start the game timer
// show next element in arrayElements
// add same/different links
var element = 0;

function incrementElement(){
  $("#elementDiv").empty();
  $("#elementDiv").append(arrayElements[element++]);
}

var anchor = document.getElementById("pathLink").href += pathArray;

function clearScores() {
  points = 0;
  correctGuesses = 0;
  incorrectGuesses = 0;
  $("#points, #answered, #correct, #incorrect").empty();
}

function newGame(){
  $("#new").click(function(event) {
      event.preventDefault();
      clearScores();
      $("#sameDiv, #differentDiv").show();
      $("#newDiv").hide();
      $("#points").append("Score: " + points + " points");
      arrayUserInputs = new Array();
      CreateTimer("timer", 5);
      incrementElement();
    });
}

function listenForClicks(){

  $("#same").on('click', function(event){
    event.preventDefault();
    arrayUserInputs.push(true);
    incrementElement();
    updateScore();
  });

  $("#different").on('click', function(event){
    event.preventDefault();
    arrayUserInputs.push(false);
    incrementElement();
    updateScore();
  });
}

// match user input to answer key, correct answer +10 points and incorrect answer -5 points, show next element

function updateScore(){
  clearScores();
  var index;
  for (index = 0; index < arrayUserInputs.length; ++index) {
    if (arrayUserInputs[index] == answerKey[index]) {
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
