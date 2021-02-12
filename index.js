/***************************/
/* Girls Who Code Workshop */
/***************************/

/* Change Message of Note functionality */
let messages = [
    "Help I've fallen for you and I can't get up.", 
    "I look up to you. You're amazing! 😌", 
    "Falling for all your great qualities. 🥺"
];
let messageContainer = document.querySelector(".note-message");
function changeMessage() {
    let randomIndex = Math.round(Math.random() * (messages.length - 1));
    let message = messages[randomIndex];
    messageContainer.textContent = message;
}
document.getElementById("msg-btn").addEventListener("click", changeMessage);

/* Change sender name on note */
let senderInput = document.getElementById("sender-input");
let senderText = document.querySelector(".note-sender");
function changeSender(event) {
    senderText.textContent = event.target.value;
}

senderInput.addEventListener("input", changeSender)

/* Change font color functionality */
// let colorBoxes = document.querySelectorAll(".color-container > div");
// function changeFontColor(event) {
//     let color = event.target.classList[0];
//     messageContainer.style.color = color;
// }

// for (let i = 0; i < colorBoxes.length; i++) {
//     colorBoxes[i].addEventListener("click", changeFontColor)
// }

/* Dynamic generate color options */

let colorContainer = document.querySelector(".color-container");

// One case
let option = document.createElement("div");
option.innerHTML = "&nbsp;";
option.style.backgroundColor = "magenta";
function changeFontColor(event) {
    let color = event.target.style.backgroundColor;
    messageContainer.style.color = color;
}
option.addEventListener("click", changeFontColor);
colorContainer.append(option);

// Generalized
function createColorOption(color) {
    option = document.createElement("div");
    option.innerHTML = "&nbsp;";
    option.style.backgroundColor = color;
    option.addEventListener("click", changeFontColor);
    return option;
}

let colors = ["lavender", "salmon", "red", "skyblue"]
for (let i = 0; i < colors.length; i++) {
    let option = createColorOption(colors[i]);
    colorContainer.append(option);
}

// Extra time? //

/* Change image functionality */
let images = [
    "appa.png",
    "dwight.png",
    "fallen-lady.png",
    "marie-kondo.png",
    "ron-swanson.png",
    "simon-cowell.png"
];
let imageContainer = document.querySelector(".note-img");
function changeImage() {
    let randomIndex = Math.round(Math.random() * (images.length - 1));
    imageContainer.style.backgroundImage = `url('./img/${images[randomIndex]}')`;
}
document.getElementById("img-btn").addEventListener("click", changeImage);

/* Change reciever name on note */
let recieverInput = document.getElementById("reciever-input");
let recieverText = document.querySelector(".note-reciever");
function changeReciever(event) {
    recieverText.textContent = event.target.value;
}

recieverInput.addEventListener("input", changeReciever);