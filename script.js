const scrollingText = document.getElementById('scrollingText');
const stopButton = document.getElementById('stopButton');

stopButton.addEventListener('click', () => {
    scrollingText.style.animationPlayState = 'paused';
    scrollingText.style.display = 'none'; // Remove the text when the button is pressed

    // Set the background image opacity to 1
    document.body.style.setProperty('--background-opacity', '1');
});