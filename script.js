const scrollingText = document.getElementById('scrollingText');
const stopButton = document.getElementById('stopButton');

stopButton.addEventListener('click', () => {
    scrollingText.style.animationPlayState = 'paused';
    scrollingText.style.display = 'none'; // Remove the text when the button is pressed
});