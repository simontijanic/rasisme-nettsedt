const scrollingText = document.getElementById('scrollingText');
const inputField = document.getElementById('inputField');

inputField.style.display = 'none';

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputField.style.display === 'none') {
        inputField.style.display = 'block';
        inputField.focus();
    } else if (event.key === 'Enter' && inputField.style.display === 'block') {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput === "im not a racist".toLowerCase() || userInput === "jeg er ikke rasist".toLowerCase()) {
            scrollingText.style.animationPlayState = 'paused';
            scrollingText.style.display = 'none'; 
            inputField.style.display = 'none';

            document.body.style.setProperty('--background-opacity', '1');
        } else {
            alert("Incorrect input. Please type: 'Im not a racist' or 'Jeg er ikke rasist'");
        }
    }
});