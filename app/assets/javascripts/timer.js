var TimerDiv, TimeRemaining;

    function CreateTimer(DivID, GameDuration) {
        TimerDiv = document.getElementById(DivID);
        TimeRemaining = GameDuration;
        UpdateTimer();
        window.setTimeout("Countdown()", 1000);
    }

    function Countdown() {

        if (TimeRemaining <= 0) {
            var name = prompt("Game Over. Your score was TBD.", "What's your name?") //how to capture name to database with score? #ajax
            alert ( "Nice playing " + name + "!")
            return; // escape function
        }

        TimeRemaining -= 1;
        UpdateTimer()
        window.setTimeout("Countdown()", 1000);
    }

    function UpdateTimer() {
    TimerDiv.innerHTML = TimeRemaining + " seconds left";
    }