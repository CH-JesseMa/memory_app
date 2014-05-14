var TimerDiv, TimeRemaining;

    function CreateTimer(DivID, GameDuration) {
        TimerDiv = document.getElementById(DivID);
        TimeRemaining = GameDuration;
        UpdateTimer();
        window.setTimeout("Countdown()", 1000);
    }

    function Countdown() {

        if (TimeRemaining <= 0) {
            $("#points, #answered, #correct, #incorrect, #same, #different, #new").empty();
            $("#new").append("<a id='new' href='/scores'>See How You Stack Up</a>")
            var name = prompt("Game Over. Your score was " + points + " points. What's your name?");
            //how to capture name to database with score #ajax
            alert ( "Nice playing " + name + "!");
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
            // so hacky
            // window.location.href = "/scores";
            // clear everything
            alert("hi");
            clearTimeout(timer);
            return; //escape function
        }

        TimeRemaining -= 1;
        UpdateTimer();
        timer = window.setTimeout("Countdown()", 1000);
    }

    function UpdateTimer() {
        TimerDiv.innerHTML = TimeRemaining + " seconds left";
    }
