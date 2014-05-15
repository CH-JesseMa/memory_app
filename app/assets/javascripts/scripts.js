// run CreateElementsList function
$(createElementsList);

// run CreateAnswerKey function
$(createAnswerKey);

// run DisplayFirstElement function
$(initialDisplay);

// preventDefault on clicking new game (must be here because of load order)

$(NewGame);
$(listenForClicks);

// keyboard shortcuts

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
