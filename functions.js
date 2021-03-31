/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
const add = (number1, number2, number3) =>  {
    return number1 + number2 + number3;
}
console.log(add(3, 4, 5));
console.log(add(11, 3, 9));

function addTwo (number1, number2, number3) {
    return number1 + number2 + number3;
}
console.log(addTwo(3, 4, 5));
console.log(addTwo(11, 3, 9));

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
const stickTogether = (firstWord, secondWord) => {
    return firstWord + secondWord;
}
console.log(stickTogether('abra', 'cadabra'));

function stickTogetherTwo (firstWord, secondWord) {
    return firstWord + secondWord;
}
console.log(stickTogetherTwo('abra', 'cadabra'));

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
const wrapAround = (firstSymbol, character) => {
    return firstSymbol + character + firstSymbol;
}
console.log(wrapAround('*', 'bril'));
console.log(wrapAround('_', 'beep'));
console.log(wrapAround('Q', 'kaas'));

function wrapAroundTwo (firstSymbol, character) {
    return firstSymbol + character + firstSymbol;
}
console.log(wrapAroundTwo('*', 'bril'));
console.log(wrapAroundTwo('_', 'beep'));
console.log(wrapAroundTwo('Q', 'kaas'));

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function writtenTogether (firstWord1, secondWord2, firstLetter, secondLetter, thirdLetter) {
    const allWords1 = firstWord1 + secondWord2;
    const allLetters = firstLetter + secondLetter + thirdLetter;
    return [allWords1, allLetters];
}
console.log(writtenTogether('abra', 'cadabra', 'a', 'b', 'c'));

function writtenTogetherTwo (firstArray, secondArray) {
    let allWords2 = ['abra', 'cadabra']
    return allWords2;
}

console.log(writtenTogetherTwo.length);


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

