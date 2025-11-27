// Count vowels in a string
// Feed the function a sentence and ask it to return how many a/e/i/o/u appear. You get to practice loops or array methods, condition checks, and tiny bits of logic.

const input = prompt("Enter a word or sentence");

// this is my little tally box
let count = 0;

// this is my vowel detector
const vowels = "aeiou";

for (let i = 0; i < input.length; i++){

    // look at one character
    const char = input[i].toLowerCase();

    if (vowels.includes(char)) {  // check if it's a vowel
        count++;                  // add 1 to the tally
    }
}

console.log("Total vowels:", count);



// Another chatgpt version

const input2 = prompt("Enter a word or sentence");

const vowels2 = "aeiou";

const count2 = [...input2.toLowerCase()]
    .filter(char => vowels.includes(char)).length;

console.log("Total vowels:", count);