// run CreateElementsList function

$( document ).ready(CreateElementsList);

// run CreateAnswerKey function

$( document ).ready(CreateAnswerKey);

// run DisplayFirstElement function

$( document ).ready(DisplayInitialElement);

// preventDefault on clicking new game (must be here because of load order)

$( document ).ready(NewGame);

// test whether loaded
$( window ).load(function() {
        console.log( "Window loaded - if you play this game via the console you are cheating. Cheating is no fun." );
    });
