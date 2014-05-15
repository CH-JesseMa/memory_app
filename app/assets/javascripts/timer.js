var TimerDiv, TimeRemaining;

// display TimeRemaining in view
    function UpdateTimer() {
        TimerDiv.innerHTML = TimeRemaining + " seconds left";
    }

// this function is called in gameplay.js in newGame function
    function CreateTimer(DivID, GameDuration) {
        TimerDiv = document.getElementById(DivID);
        TimeRemaining = GameDuration;
        UpdateTimer();
        window.setTimeout("Countdown()", 1000);
    }

    function Countdown() {

        if (TimeRemaining <= 0) {
            $("#same, #different, #new").empty();
            var name = prompt("Game Over. Your score was " + points + " points. What's your name?");
            $.ajax({
                url: "/scores",
                type: "POST",
                dataType: "json",
                data: { score:
                    {
                        name: name,
                        points: points,
                        guesses: (correctGuesses+incorrectGuesses),
                        correct: correctGuesses,
                        incorrect: incorrectGuesses
                    }
                }
                }).done(function(response){
                    console.log("ajax done function");
                    console.log(response);
                });
            return; //escape function
        }

        TimeRemaining -= 1;
        UpdateTimer();
        window.setTimeout("Countdown()", 1000);
    }
