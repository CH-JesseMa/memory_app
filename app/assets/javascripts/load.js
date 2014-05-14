// Functions that should run when the page loads before the game starts:

// 1. Create new arrays for use in the game (a) an array of that game's elements list (b) the answer key array (c) any empty array for user inputs (d) reset points (e) show arrayElements[0]

// Set the objects to be used in the game
var arrayMatchers = new Array(1,2,3,4,5);

// Create the empty array which will be randomly populated with Matchers later
var arrayElements = new Array();

// Create empty array which will be the Answer Key
var answerKey = new Array();

// Create empty array which will hold user inputs
var arrayUserInputs = new Array();

// Ruby: .shuffle
function Shuffle(array) {
  var counter = array.length, temp, index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

// Ruby: 500.times do a << x.shuffle.first end

function CreateElementsList(){
  for (var i = 0; i < 100; i++){
    Shuffle(arrayMatchers);
    var randomizedMatcher = arrayMatchers[0];
    arrayElements.push(randomizedMatcher);
  }
}

// Create answer key for game (match index elements in a)
// Ruby: a.each_index do |n| b << (a[n-1] == a[n]) end

function CreateAnswerKey(){
  var index;
  for (index = 0; index < arrayElements.length; ++index) {
  answerKey.push(arrayElements[index-1] == arrayElements[index])
  }
}

// show arrayElements[0]
function DisplayInitialElement(){
  var element = arrayElements[0]
  $("#element").append(element);
}

