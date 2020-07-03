// this is a Javascript module - a type of programming pattern
(() => {
  console.log('fried!');

  function playMatchingAduio(event) {
    // play the card match game
    // card 1 is the keyboard keyCode (generate by the keypress event)
    let card1 = event.keyCode;


    // take card1 (the keyCode) and find the matching audio element
    // using the custom data-key attribute
    let card2 = document.querySelector(`audio[data-key="${card1}"]`);

    // if you have a match, play card2 (the matching audio element)
    if (card2) {
      card2.play();
    }
  }

  window.addEventListener('keydown', playMatchingAduio);
})();
