// run CreateElementsList function; run CreateAnswerKey function; run DisplayFirstElement function

$(createElementsList);
$(createAnswerKey);
$(initialDisplay);
$(newGame);
$(listenForClicks);

// keyboard shortcuts

$(document).keyup(function (event) {
  if ((event.which == 83 || event.keyCode == 83) && (element != 1) && (TimeRemaining > 0)) {
    $("#same").trigger('click')
  } else if ((event.which == 68 || event.keyCode == 68) && (element != 1) && (TimeRemaining > 0)) {
    $("#different").trigger('click')
  } else if (event.which == 78 || event.keyCode == 78) {
    window.location.href = "/";
  } else if ((event.which == 71 || event.keyCode == 71) && (element == 1)) {
    $("#new").trigger('click')
  } else if ((event.which == 72 || event.keyCode == 72) && (element == 1 || TimeRemaining == 0)) {
    window.location.href = "/scores";
  }
});

// test whether js loaded
$( window ).load(function() {
  console.log( "If you play via the console you are cheating. Cheating is no fun." );
});
