// Functions that should run when the user clicks 'new game' link

// start the game timer
// show next element in arrayElements
// add same/different links

function NewGame(){
  $("#new").click(function(event) {
      event.preventDefault();
      CreateTimer("timer", 3000);
      DisplayNextElement();
      $("#same").append("<a id='same' href='#''>Same</a>");
      $("#different").append("<a id='different' href='#'>Different</a>");
  });
}

function DisplayNextElement(){
  $("#element").empty();
  var element = arrayElements[arrayUserInputs.length+1];
  $("#element").append(element);
}

// listen for s/d/same/different click and add user input on click as true/false to UserInputArray

function AddUserGuesses(){
  $("#same").click(function(event){
    event.preventDefault();
    arrayUserInputs.push(true)
  });
  $("#different").click(function(event){
    event.preventDefault();
    arrayUserInputs.push(false)
  });
  DisplayNextElement();
}

// match user input to answer key, when user input matches correct answer +10 points and whenever user input doesn't match correct answer -5 points, finally show next arrayElements element

function UpdateScore(){

}

// add user input to user input array and match input against key and then assess points
// Ruby:
// while u.length < (b.length)  # && TimeRemaining > 0
//   points = 0 # reset points

//   guess = to_boolean(gets.chomp)
//   u << guess

//   u.each_index do |n| #calculate point total
//     if u[n] == b[n]
//       points += 10
//     else
//       points -= 5
//     end
//   end
// end
