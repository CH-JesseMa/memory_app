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
  } else if (event.which == 66 || event.keyCode == 66) {
    window.location.href = "https://www.google.com/";
  } else if (event.which == 78 || event.keyCode == 78) {
    window.location.href = "/";
  } else if ((event.which == 73 || event.keyCode == 73) && (element == 1)) {
    $("#rulesDiv").html('Below is the first image. When the game starts, you will see the <em>next</em> image. If the image is the <strong>same</strong> as the previous image, click the <strong>same link</strong> or <strong>press (s)</strong> on your keyboard. If the image is <strong>different</strong>, click the <strong>different link</strong> or <strong>press (d)</strong> on your keyboard. Try to get through as many images as you can before you run out of time. <strong>Press (g)</strong> to start!</br>')
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
