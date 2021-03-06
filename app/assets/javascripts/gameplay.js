// Functions that should run when the user clicks 'new game' link

var element = 0;

function incrementElement(){
  $("#matcher").fadeOut(150, function() {
    $("#elementDiv").empty();
    $("#elementDiv").append(arrayElements[element++]);
  });
}

function clearScores() {
  points = 0;
  correctGuesses = 0;
  incorrectGuesses = 0;
  $("#pointsDiv, #answeredDiv, #correctDiv, #incorrectDiv").empty();
}

function newGame(){
  $("#new").click(function(event) {
      event.preventDefault();
      clearScores();
      $("#buttonDiv, #metricsDiv, #ptContainer").show();
      $("#newDiv, #rulesDiv, #scoresDiv").hide();
      $("#pointsDiv").append("Score: " + points + " points");
      arrayUserInputs = new Array();
      // SET GAME DURATION HERE
      CreateTimer("timerDiv", 30);
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
      points = points - 25;
      incorrectGuesses = incorrectGuesses + 1;
    }
  }
  $("#pointsDiv").append("Score: " + points + " points");
  $("#answeredDiv").append("Total Guesses: " + (correctGuesses+incorrectGuesses))
  $("#correctDiv").append("Correct: " + correctGuesses)
  $("#incorrectDiv").append("Incorrect: " + incorrectGuesses)
}
