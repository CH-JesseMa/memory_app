// Functions that should run when the page loads before the game starts:

// 1. Create new arrays for use in the game (a) an array of that game's elements list (b) the answer key array (c) any empty array for user inputs (d) reset points (e) show arrayElements[0]

// see load.js

// Functions that should run when the user clicks 'new game'

// 2. Start the game timer, show arrayElements[1], listen for s/d/same/different click

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
