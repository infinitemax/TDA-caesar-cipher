const Cipher = require ("./classes.js");

const cipher = new Cipher();

// test to check for input
test("encrypt method returns false if no message is passed to transform method", () => {
    expect(cipher.encrypt()).toBe(false)
})

test("encrypt method returns false if no shift specified", () => {
    expect(cipher.encrypt("hello")).toBe(false)
})

test("isUpperCase function returns true when passed an uppper case letter", () => {
    expect(cipher.isUpperCase('A')).toBe(true)
})

test("isUpperCase function returns false when passed an lower case letter", () => {
    expect(cipher.isUpperCase('a')).toBe(false)
})

test("isAlphaNumeric returns true when passed a lowercase letter", () => {
    expect(cipher.isAlphaNumeric('a')).toBe(true)
})

test("isAlphaNumeric returns true when passed an uppercase letter", () => {
    expect(cipher.isAlphaNumeric('A')).toBe(true)
})

test("isAlphaNumeric returns true when passed a number as a string", () => {
    expect(cipher.isAlphaNumeric('1')).toBe(true)
})

test("isAlphaNumeric returns false when passed whitespace", () => {
    expect(cipher.isAlphaNumeric(' ')).toBe(false)
})

test("isAlphaNumeric returns false when passed whitespace", () => {
    expect(cipher.isAlphaNumeric(' ')).toBe(false)
})

test("transform letter returns new letter, shifted by the shift amount, when passed a lowercase letter", () => {
    expect(cipher.transformLetter('a', 1, 0)).toBe('b')
})

test("encrypt function returns encrypted word, based on shift parameter", () => {
    expect(cipher.encrypt('hello', 1, 0)).toBe('ifmmp')
})

test("encrypted word can handle lowercase, uppercase, whitespace, and punctuation", () => {
    expect(cipher.encrypt('Hello there Max & Annie! Are you good?', 1, 0)).toBe('Ifmmp uifsf Nby & Boojf! Bsf zpv hppe?')
})

test("encrypted word can handle lowercase, uppercase, whitespace, and punctuation and wraps through the alphabet", () => {
    expect(cipher.encrypt('Hello there Max & Annie! Are you good?', 13, 0)).toBe('Uryyb gurer Znk & Naavr! Ner lbh tbbq?')
})


test("shift is successfully transformed when passed an increment", () => {
    expect(cipher.encrypt('Hello', 1, 1)).toBe('Igopt')
})

test("incremental transformation of shift works when shift wraps around the alphabet", () => {
    expect(cipher.encrypt('Hello', 24, 10)).toBe('Fmdna')
})