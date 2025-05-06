const scrollingText = document.getElementById('scrollingText');
const inputField = document.getElementById('inputField');

inputField.style.display = 'none';

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputField.style.display === 'none') {
        inputField.style.display = 'block';
        inputField.focus();
    } else if (event.key === 'Enter' && inputField.style.display === 'block') {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput === "Rasisme er teit!".toLowerCase() ) {
            scrollingText.style.animationPlayState = 'paused';
            scrollingText.style.display = 'none'; 
            inputField.remove();

            document.body.style.setProperty('--background-opacity', '1');
        } else {
            alert("FEIL!'");
        }
    }
});