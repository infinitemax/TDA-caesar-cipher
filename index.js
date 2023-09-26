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

}

// increment
let increment = 0;
let incrementSlider = document.getElementById("increment");
let incrementDisplay = document.getElementById("incrementDisplay")

incrementSlider.oninput = () => {
    incrementDisplay.innerHTML = incrementSlider.value;
    increment = Number(incrementSlider.value);
}




userText.addEventListener("input", () => {

    cipherText = userText.value;
    let processedText = cipher.encrypt(cipherText, shift, increment, false)
    


    output.innerHTML = processedText;
})