const test = new Cipher();

console.log(test.encrypt("Mbz mx jwxv!", 0, 1, true))

console.log(test.encrypt("Annie is the best!", 0, 1, false))

const userText = document.getElementById("userText")
const output = document.getElementById("output")

let cipherText = userText.value;

userText.addEventListener("input", (event) => {

    cipherText = userText.value;
    console.log(cipherText);
})