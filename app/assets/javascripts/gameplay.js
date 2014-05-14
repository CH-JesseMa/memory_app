// Functions that should run when the user clicks 'new game' link

// start the game timer
// show next element in arrayElements
// add same/different links

function NewGame(){
  $("#new").click(function(event) {
      event.preventDefault();
      CreateTimer("timer", 10);
      DisplayNextElement();
      $("#same").empty();
      $("#different").empty();
      $("#points").html("Score: 0 points");
      $("#same").append("<a id='same' href='#''>Same</a>");
      $("#different").append("<a id='different' href='#'>Different</a>");
      AddUserGuesses();
    })
  }

function DisplayNextElement(){
  $("#element").empty();
  var element = arrayElements[arrayUserInputs.length+1];
  $("#element").append(element);
}

// listen for s/d/same/different click and add user input on click as true/false to UserInputArray

// remove these links when time remaining is 0 - see timer.js Countdown function

function AddUserGuesses(){

  $("#same").click(function(event){
    event.preventDefault();
    arrayUserInputs.push(true);
    DisplayNextElement();
    $("#points").empty();
    UpdateScore();
  });
  $("#different").click(function(event){
    event.preventDefault();
    arrayUserInputs.push(false);
    DisplayNextElement();
    $("#points").empty();
    UpdateScore();
  });
}

// match user input to answer key, when user input matches correct answer +10 points and whenever user input doesn't match correct answer -5 points, finally show next arrayElements element

function UpdateScore(){
  points = 0;
  var index;
  for (index = 0; index < arrayUserInputs.length; ++index) {
    if (arrayUserInputs[index] == answerKey[index+1]) {
      points = points + 10
    } else {
      points = points - 5
    }
  }
  $("#points").append("Score: " + points + " points");
}
