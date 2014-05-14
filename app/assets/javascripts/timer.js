var TimerDiv, TimeRemaining;

    function CreateTimer(DivID, GameDuration) {
        TimerDiv = document.getElementById(DivID);
        TimeRemaining = GameDuration;
        UpdateTimer();
        window.setTimeout("Countdown()", 1000);
    }

    function Countdown() {

        if (TimeRemaining <= 0) {
            $("#same").empty();
            $("#different").empty();
            var name = prompt("Game Over. Your score was " + points + " points. What's your name?");
            //how to capture name to database with score? #ajax
            alert ( "Nice playing " + name + "!");
            $.ajax({
                    type: "POST",
                    url: "/scores",
                    data: { score: {
                        name: name,
                        points: points,
                        guesses: arrayUserInputs.length,
                        correct: correctGuesses,
                        incorrect: incorrectGuesses
                        }
                    },
                })
            // clear previous game data
            $("#points, #answered, #correct, #incorrect, #same, #different").empty();
            points = 0;
            correctGuesses = 0;
            incorrectGuesses = 0;
            arrayUserInputs = new Array();
            window.location.reload(true) // should reload and clear cache (doesn't work in Chrome)
            console.log("If I see this, I have failed to reload")
        }

        TimeRemaining -= 1;
        UpdateTimer()
        window.setTimeout("Countdown()", 1000);
    }

    function UpdateTimer() {
    TimerDiv.innerHTML = TimeRemaining + " seconds left";
    }
