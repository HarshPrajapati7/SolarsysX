const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const output = document.getElementById('output');

// Initialize SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

let novaActive = false;

// When speech recognition starts
recognition.onstart = function() {
  output.textContent = "Nova is listening...";
};

// When speech recognition gets a result
recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript.toLowerCase();
  output.textContent = "You said: " + speechResult;
  
  if (novaActive) {
    processCommand(speechResult);
  }

  // Check for activation or deactivation of Nova
  if (speechResult.includes("activate nova")) {
    novaActive = true;
    output.textContent = "Nova is now active!";
  } else if (speechResult.includes("stop nova")) {
    novaActive = false;
    output.textContent = "Nova has been stopped.";
  }
};

// Start recognition when the button is clicked
startBtn.addEventListener('click', () => {
  recognition.start();
});

// Stop recognition when Stop Nova is clicked
stopBtn.addEventListener('click', () => {
  recognition.stop();
  output.textContent = "Nova is no longer listening.";
});

// Function to process voice commands
function processCommand(command) {
  if (command.includes("go to section 1")) {
    window.location.href = "#section1";
  } else if (command.includes("go to section 2")) {
    window.location.href = "#section2";
  } else if (command.includes("open section 1")) {
    document.getElementById('section1').scrollIntoView();
  } else if (command.includes("open section 2")) {
    document.getElementById('section2').scrollIntoView();
  }
}

function speakResponse(responseText) {
    const speech = new SpeechSynthesisUtterance(responseText);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  }
  
  // Example: speak when Nova activates
  if (speechResult.includes("activate nova")) {
    novaActive = true;
    speakResponse("Nova is now active!");
  }
  