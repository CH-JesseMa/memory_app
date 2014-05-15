// run CreateElementsList function

$( document ).ready(CreateElementsList);

// run CreateAnswerKey function

$( document ).ready(CreateAnswerKey);

// run DisplayFirstElement function

$( document ).ready(InitialDisplay);

// preventDefault on clicking new game (must be here because of load order)

$( document ).ready(NewGame);
$( document ).ready(AddSameGuess);
$( document ).ready(AddDiffGuess);

// keyboard shortcut

$(document).keyup(function (event) {
  if (event.which == 83 || event.keyCode == 83) {
    $("#same").trigger('click')
  } else if (event.which == 68 || event.keyCode == 68) {
    $("#different").trigger('click')
  } else if (event.which == 78 || event.keyCode == 78) {
    window.location.reload(true)
  } else if (event.which == 71 || event.keyCode == 71) {
    $("#new").trigger('click')
  }
});

// test whether loaded
$( window ).load(function() {
  console.log( "Window loaded - if you play this game via the console you are cheating. Cheating is no fun." );
});
