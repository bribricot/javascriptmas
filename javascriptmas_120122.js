
/* Panic function 
The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. 
Use JavaScript's built in string methods join & split.

If the string is a phrase or sentence, add a 😱 emoji in between each word. 
*/
function emojify(words) {
	return words.join(" 😱 ");
}

function capitalize(str){
	return str.toUpperCase() + "!";
}

function panic(str) {
	let words = str.split(" ");
	if (words)
		str = emojify(words);
	str = capitalize(str);
    return str;
}

// Testing
console.log(panic("Hello"));
console.log(panic("I'm almost out of coffee"));
 
//If word only : Expected output: "HELLO!"
//If sentence : Expected output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"



