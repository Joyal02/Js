// Variables
var synth = window.speechSynthesis;
var textToSpeak = '';
var storyText = document.getElementById('storyText');

// Word arrays
var nouns = ['cat', 'dog', 'bird', 'tree', 'car'];
var verbs = ['jumped', 'ran', 'sang', 'ate', 'danced'];
var adjectives = ['happy', 'sad', 'tall', 'short', 'funny'];
var nouns2 = ['ball', 'book', 'flower', 'hat', 'chair'];
var places = ['park', 'beach', 'mountain', 'school', 'zoo'];

// Button elements
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton2 = document.getElementById('nounButton2');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');



// Event listeners for word buttons
nounButton.addEventListener('click', function() {
  var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  textToSpeak += ' ' + randomNoun;
  storyText.textContent = textToSpeak;
});

verbButton.addEventListener('click', function() {
  var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  textToSpeak += ' ' + randomVerb;
  storyText.textContent = textToSpeak;
});

adjectiveButton.addEventListener('click', function() {
  var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  textToSpeak += ' ' + randomAdjective;
  storyText.textContent = textToSpeak;
});

nounButton2.addEventListener('click', function() {
  var randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
  textToSpeak += ' ' + randomNoun2;
  storyText.textContent = textToSpeak;
});

placeButton.addEventListener('click', function() {
  var randomPlace = places[Math.floor(Math.random() * places.length)];
  textToSpeak += ' ' + randomPlace;
  storyText.textContent = textToSpeak;
});

// Event listener for speak button
speakButton.addEventListener('click', function() {
  speakNow(textToSpeak);
});

// Speak function
function speakNow(string) {
  var utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}



var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speak');
var restartButton = document.querySelector('#restart');

var nouns = ['cat', 'dog', 'rabbit', 'bird', 'horse'];
var verbs = ['runs', 'jumps', 'sleeps', 'eats', 'hides'];
var adjectives = ['big', 'small', 'happy', 'sad', 'funny'];
var nouns2 = ['ball', 'book', 'flower', 'hat', 'chair'];
var places = ['park', 'beach', 'forest', 'mountain', 'city'];

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateStory() {
  var subject = getRandomWord(nouns);
  var verb = getRandomWord(verbs);
  var adjective = getRandomWord(adjectives);
  var object = getRandomWord(nouns);
  var place = getRandomWord(places);
  
  textToSpeak = 'The ' + subject + ' ' + verb + ' ' + adjective + ' ' + object + ' in the ' + place + '.';
}

function speakNow() {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  // Actually speak the text
  synth.speak(utterThis);
}

function resetStory() {
  textToSpeak = '';
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that generates a random story
speakButton.onclick = function() {
  generateStory();
  speakNow();
}

// Onclick handler for the restart button that resets the story
restartButton.onclick = function() {
  resetStory();
}
