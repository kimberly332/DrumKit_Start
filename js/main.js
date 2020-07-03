// this is a Javascript module - a type of programming pattern
(() => {
  console.log('fried!');

  let keys = Array.from(document.querySelectorAll('.key'));
  // MDN -> search for the Array datatype

  function resetKey() {
    // don't add a . in this case, just the name of the class
    this.classList.remove('playing');
  }

  function playMatchingAduio(event) {
    // play the card match game
    // card 1 is the keyboard keyCode (generate by the keypress event)
    let card1 = event.keyCode;

    // take card1 (the keyCode) and find the matching audio element
    // using the custom data-key attribute
    let card2 = document.querySelector(`audio[data-key="${card1}"]`),
        key = document.querySelector(`div[data-key="${card}"]`);

    // ! tests for a negative result
    // falsy means something can be undefined or it canbe null
    if (!card2) {
      return;
    }
    //rewind the audio sound first
    card2.currentTime = 0;
    // then play it
    card2.play();


    // if you have a match, play card2 (the matching audio element)
    // if (card2) {
    //   //rewind the audio sound first
    //   card2.currentTime = 0;
    //   // then play it
    //   card2.play();
    // }
  }

  window.addEventListener('keydown', playMatchingAduio);

  // keys are all of the circular elements around each of the letters on the screen (the divs)
  keys.forEach(key => key.addEventListener('transitioned', resetKey));

  for (key of keys) {
    key.addEventListener('trainsitioned', resetKey);
  }

})();
