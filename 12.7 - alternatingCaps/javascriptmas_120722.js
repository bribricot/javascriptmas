/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function checkletter(char) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
        return true;
    return false;    
}

function altCaps(str) {
    let i = 0;
    let uppercaseify = false;
    let newStr = '';

    while (i < str.length) {
        if (checkletter(str[i])) {
            if (uppercaseify) {
                newStr += str[i].toUpperCase();
                uppercaseify = false;
            }
            else {
                newStr += str[i].toLowerCase();
                uppercaseifsy = true;
            }
        }
        else
            newStr += str[i];
        i++;
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));