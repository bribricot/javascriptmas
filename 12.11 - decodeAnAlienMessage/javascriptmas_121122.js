/* Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string.
Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseStringManually(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    	return joinString;
}


/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use r<euse your reverseString() function, use string methods, or reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
	messages = arr.split(" ");
    	return reverseStringManually(arr);
}


console.log(reverseString(title));
console.log(reverseStringManually(title));
console.log(reverseStringsInArray(messages));
