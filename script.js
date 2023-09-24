const backgrounds =[
    '#3498db', // Blue color as a background
    '#e74c3c', // Red color as a background
    '#27ae60', // Green color as a background
    'red',
    'yellow',
    'black',
    'blue',
    'orange',
    'green',
    'pink'
];
const backgroundElement = document.getElementById('change');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    backgroundElement.style.background = selectedBackground;
});