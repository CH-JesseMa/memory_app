// run CreateElementsList function
$(createElementsList);

// run CreateAnswerKey function
$(createAnswerKey);

// run DisplayFirstElement function
$(initialDisplay);

// preventDefault on clicking new game (must be here because of load order)

$(newGame);
$(listenForClicks);

// keyboard shortcuts

$(document).keyup(function (event) {
  if (event.which == 83 || event.keyCode == 83) {
    $("#same").trigger('click')
  } else if (event.which == 68 || event.keyCode == 68) {
    $("#different").trigger('click')
  } else if (event.which == 78 || event.keyCode == 78) {
    window.location.href = "/";
  } else if (event.which == 71 || event.keyCode == 71) {
    $("#new").trigger('click')
  }
});

// test whether loaded
$( window ).load(function() {
  console.log( "If you play via the console you are cheating. Cheating is no fun." );
});
