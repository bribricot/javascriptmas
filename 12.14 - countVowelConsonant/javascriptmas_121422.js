// function placeholder(accumulator, current) {
// 	return accumulator + letterValue(current);
// }

function countVowelConsonant(str) {
  // write code here
//"aeriou"
//["a", "e"...]
	// let tab = str.split('');
	// return tab.reduce(placeholder)
	let count = 0;
	for (let i = 0; i < str.length; i++) {
  		count = count + letterValue(str[i])
	}
}

function letterValue(c) {
	if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U')
		return (1);
	return (2);
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});