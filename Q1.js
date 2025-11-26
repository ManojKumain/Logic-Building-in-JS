// Reverse a string
// Take a word like "manoj" and return "jonam". It nudges you into thinking about strings like arrays of characters. It also pushes you to break a problem into tiny transformations.



// This is my solution
const input = prompt("Enter your name");
const splittedInput = input.split("");
const splitReversedString = splittedInput.reverse();
const joinReversedString = splitReversedString.join('');
console.log(joinReversedString);

// This is chatgpt solution polished version:
// const input = prompt("Enter your name");
// const reversed = input.split("").reverse().join("");
// console.log(reversed);







