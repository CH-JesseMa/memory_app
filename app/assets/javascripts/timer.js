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
            window.location.reload()
            return; // escape function
        }

        TimeRemaining -= 1;
        UpdateTimer()
        window.setTimeout("Countdown()", 1000);
    }

    function UpdateTimer() {
    TimerDiv.innerHTML = TimeRemaining + " seconds left";
    }
