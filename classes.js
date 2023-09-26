
class Cipher {
    constructor (message, shift, increment) {
        this.message = message;
        this.shift = shift;
        this.increment = increment;
        this.isEncoded = false;
    }

    isAlphaNumeric(letter) {
        // method to check for alphanumeric chars
        return /[a-zA-Z\d]/.test(letter);

    }

    isUpperCase(letter) {
        // method to check case
        // returns true if letter is uppercase
        return /[A-Z]/.test(letter);
    }

    transformLetter(letter, shift, isEncoded) {
        // method to change individual letter

        const alphabet = [
            'a', 'b', 'c', 'd', 'e', 
            'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o', 
            'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 
            'z'
        ]

        // note use of modulus to wrap through alphabet
        if (isEncoded) {
            console.log(`letter is ${letter}`)
            console.log(`shift is ${shift}`)

            // calculate necessary index where shift is reduced

            let index = (alphabet.indexOf(letter) + (26 - (shift))) % 26
            console.log(`index is ${index}`)

            if (index < 0) {
                index = (26 + index) % 26;
            }

            

            return alphabet[index];
        } else {
            return alphabet[(alphabet.indexOf(letter) + shift) % 26];
        }
    }

    encrypt(message, shift, increment, isEncoded) {

        // move these validation steps into getter and setter methods
        // overall encrypt method
        if (message === undefined) {
            console.log("no message")
            return false;
        }
        if (shift === undefined) {
            console.log("no shift")
            return false;
        }

        // split message
        const letters = message.split("");

        let encryptedMessage = "";

        letters.forEach(letter => {
            if (!this.isAlphaNumeric(letter)) {
                // add punctuation and whitespace straight to encrypted message
                encryptedMessage += letter;
            } else if (this.isUpperCase(letter)) {
                // transform uppercase
                let item = this.transformLetter(letter.toLowerCase(), shift, isEncoded)
                
                encryptedMessage += item.toUpperCase();
            } else {
                // transform lowercase
                
                encryptedMessage += this.transformLetter(letter, shift, isEncoded);
            }
          
                shift += increment;
            
        })

        return encryptedMessage;
    }
};




