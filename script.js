
function changeBackground() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    let randomColour = `#${hex}`;

    let card = document.querySelector("#card");
    card.style.backgroundColor = randomColour;
}

let backgroundButton = document.querySelector("#background-button");
backgroundButton.addEventListener('click', changeBackground);