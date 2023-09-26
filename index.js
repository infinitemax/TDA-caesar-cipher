const cipher = new Cipher();

console.log(`We can decrypt: ${cipher.encrypt("Mbz mx jwxv!", 0, 1, true)}`)

console.log(`We can encrypt: ${cipher.encrypt("Annie is the best!", 0, 1, false)}`)

const userText = document.getElementById("userText")
const output = document.getElementById("output")

let cipherText = userText.value;


// slider displays and values

// shift
let shift = 0;
let shiftSlider = document.getElementById("shift");
let shiftDisplay = document.getElementById("shiftDisplay")

shiftSlider.oninput = () => {
    shiftDisplay.innerHTML = shiftSlider.value;
    shift = Number(shiftSlider.value);

    // update the output as the slider is altered
    cipherText = userText.value;
    output.innerHTML = processInput(cipherText, shift, increment, encrypted);
}

// increment
let increment = 0;
let incrementSlider = document.getElementById("increment");
let incrementDisplay = document.getElementById("incrementDisplay")

incrementSlider.oninput = () => {
    incrementDisplay.innerHTML = incrementSlider.value;
    increment = Number(incrementSlider.value);

    // update the output as the slider is altered
    cipherText = userText.value;
    output.innerHTML = processInput(cipherText, shift, increment, encrypted);
}

// toggle
let encrypted = false;
const toggle = document.getElementById("switchValue")
const encryptLabel = document.getElementById("encryptLabel");
const decryptLabel = document.getElementById("decryptLabel");

// establish whether toggle is set to encrypt or decrypt
toggle.addEventListener("change", () => {
    if (!encrypted) {
        encrypted = true;
        decryptLabel.classList.add("toggleLabel");
        encryptLabel.classList.remove("toggleLabel");
        
    } else if (encrypted) {
        encrypted = false;
        encryptLabel.classList.add("toggleLabel");
        decryptLabel.classList.remove("toggleLabel");
        
    }
    // update the output as the toggle is altered
    cipherText = userText.value;
    output.innerHTML = processInput(cipherText, shift, increment, encrypted);

})

// driver function to process the user input
const processInput = (words, shift, increment, isEncoded) => {
    return cipher.encrypt(words, shift, increment, isEncoded)
}

// event listener to grab input and process it
userText.addEventListener("input", () => {

    cipherText = userText.value;
    output.innerHTML = processInput(cipherText, shift, increment, encrypted);
})

