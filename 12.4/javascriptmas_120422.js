/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

//Si tab de string :
function whisper(tab) {
	for (let i = 0; i < tab.length; i++) {
		let newstr = tab[i].toLowerCase();
	    if (newstr.endsWith('!')) // Ou if newstr[newstr.length - 1] === '!';
	  		newstr = newstr.slice(0, [-1]);
	  	tab[i] = "shh... " + newstr;
  	}
  	return tab;
}

//Appeler plrs fois fn
for (let j = 0; i < tab.length; j++) {
	console.log(whisper(tab[i]));
}

console.log(whisper(["PLEASE STOP SHOUTING.", "MA'AM, this is a Wendy's!"]));
//Si simple str

function whisperr(str) {
	let newstr = str.toLowerCase();
    if (newstr.endsWith('!')) // Ou if newstr[newstr.length - 1] === '!';
  		newstr = newstr.slice(0, [-1]);
	return "shh... " + newstr;
}

console.log(whisperr("PLEASE STOP SHOUTING."));
console.log(whisperr("MA'AM, this is a Wendy's!"));