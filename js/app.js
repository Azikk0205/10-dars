const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-EN'; 

const output = document.getElementById('output');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    recognition.start();
    output.textContent = 'Text: ';
});

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.textContent += transcript;
};
