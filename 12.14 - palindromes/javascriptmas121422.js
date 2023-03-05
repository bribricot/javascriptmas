/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    j = str.length - 1;
    for (let i = 0; i < j; i++) {
    	if (str[i] !== str[j - i])
    		return false;
    }
    return true
}

// ON POURRAIT AUSSI PLUTOT QUE DE SOUSTRAIRE I A J A CHAQUE FOIS DECREMENTER J A CHAQUE TOUR DE BOUCLE.

// function isPalindrome(str){
//     if (str === str.split('').reverse().join(''))
//         return true;
//     return false;
// }

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
