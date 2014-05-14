window.onload = CreateTimer("timer", 30);

function CreateArrays(){
  arrayElements = []; // a Randomized list
  arrayAnswers = []; // b
  arrayUserInputs = []; // u
  arrayMatchers = [1,2,3,4,5]; //x Set of all objects
  points = 0
}

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


CreateArrays();
// how do I repeat this a lot of times
// Ruby
// 500.times do a << x.shuffle.first end

for (var i = 0; i < 500; i++){
  arrayMatchers.shuffle();
  var randomizedMatcher = arrayMatchers.indexOf(0);
  arrayElements.push(randomizedMatcher);
}

// Calculate and fill array of correct answers (match index elements in a)
// Ruby:
// a.each_index do |n|
//   b << (a[n-1] == a[n])
// end

var index;
for (index = 0; index < arrayElements.length, ++index) {
arrayAnswers.push(arrayElements[index-1] == arrayElements[index])
}

// ### 4. Convert user input to boolean

def to_boolean(string)
  string == 'true'
end

// ### 5. Get user input and whenever user input matches correct answer +10 and whenever user input doesn't match correct answer -5

while u.length < (b.length)  # && TimeRemaining > 0
  points = 0 # reset points

  guess = to_boolean(gets.chomp)
  u << guess

  u.each_index do |n| #calculate point total
    if u[n] == b[n]
      points += 10
    else
      points -= 5
    end
  end
end

### have to figure out s == 'true' and d == 'false'

### on load

Create new session #what is a session in js? is there a refresh function?
Create new array of elements
Create new array of correct answers
Reset points
Show a[0]

### on game start

Start timer
Show a[1]
Listen for s/d/same/different click

### while TimeRemaining != 0 && a button/s/d is pressed advance to next element

Record input
Match against correct answer array
Calculate new points total
Show a[2]

### when TimeRemaining == 0

Ask for name
Save score and name to database with timestamp
Record questions answered
Record questions answered correctly
Record questions answered incorrectly
Refresh page
