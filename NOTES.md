## Need to do this

rake assets:precompile RAILS_ENV=production

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
