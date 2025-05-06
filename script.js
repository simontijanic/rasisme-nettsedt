const scrollingText = document.getElementById('scrollingText');

const inputField = document.getElementById('inputField');

inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (inputField.value.trim() === "Im not a racist") {
            scrollingText.style.animationPlayState = 'paused';
            scrollingText.style.display = 'none'; // Remove the text when the correct input is entered

            document.body.style.setProperty('--background-opacity', '1');
        } else {
            alert("Incorrect input. Please type: Im not a racist");
        }
    }
});