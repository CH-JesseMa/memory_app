
  $("#hi").bind("keyup", function(e) {
       //on letter number
       if (e.which <= 90 && e.which >= 48)
       {
          alert('hello');
       }
});

  $("#same").on('keyup', function(event){
    event.preventDefault();
    if (event.which === 83 || event.keyCode === 83){
    arrayUserInputs.push(true);
    EmptyDivsDisplayNextElementUpdateScore();
  });

  $("#different").on('keyup', function(event){
    event.preventDefault();
    if (event.which === 68 || event.keyCode === 68){
    arrayUserInputs.push(false);
    EmptyDivsDisplayNextElementUpdateScore();
  });
## Need to do this

rake assets:precompile RAILS_ENV=production

## Game Flow

// Functions that should run when the page loads before the game starts:

// 1. Create new arrays for use in the game (a) an array of that game's elements list (b) the answer key array (c) any empty array for user inputs (d) reset points (e) show arrayElements[0]

// see load.js

// Functions that should run when the user clicks 'new game'

// 2. Start the game timer, show arrayElements[1], listen for s/d/same/different click

// see gameplay.js

// Functions that should run when the user clicks s/d/same/different button/links

// 3. Convert user input to boolean and add to user input array, match user input to answer key, when user input matches correct answer +10 points and whenever user input doesn't match correct answer -5 points, finally show next arrayElements element

// convert to boolean
// Ruby:
// def to_boolean(string)
//   string == 'true'
// end

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

// Functions that should run when TimeRemaining == 0

// 4. Ask for name, save score and name to database, record questions answered, record questions answered correctly and incorrectly, and refresh page



### Forming the game list (this will need to happen every time a game starts)

### Ruby Setup

#array of elements
a = []
#array of correct answers
b = []
#array of user guesses
u = []
#starting value of points
points = 0
#create timer
See timer.html

### 1. Define an array of elements

x = [1,2,3,4]

### 2. (a) shuffle array x (b) take the first element of that array and put it into an empty array a (c) repeat that five times (eventually just do a few hundred)

5.times do
  a << x.shuffle.first
end

### 3. calculate and fill array of correct answers (match index elements in a)

a.each_index do |n|
  b << (a[n-1] == a[n])
end

### 4. Convert user input to boolean

def to_boolean(string)
  string == 'true'
end

### 5. Get user input and whenever user input matches correct answer +10 and whenever user input doesn't match correct answer -5

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

counter = 10;
setInterval(function(){
  counter--
  console.log(counter)
}, 1000)

            // window.location.reload(true) // should reload and clear cache (doesn't work in Chrome)
            // console.log("If I see this, I have failed to reload the page")
