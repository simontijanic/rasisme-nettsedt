const scrollingText = document.getElementById('scrollingText');
const inputField = document.getElementById('inputField');

inputField.style.display = 'none';

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputField.style.display === 'none') {
        inputField.style.display = 'block';
        inputField.focus();
    } else if (event.key === 'Enter' && inputField.style.display === 'block') {
        if (inputField.value.trim() === "Im not a racist") {
            scrollingText.style.animationPlayState = 'paused';
            scrollingText.style.display = 'none'; 

            document.body.style.setProperty('--background-opacity', '1');
        } else {
            alert("Incorrect input. Please type: Im not a racist");
        }
    }
});