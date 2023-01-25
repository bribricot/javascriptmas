/*Hints : Give an array of strings, sort them in the order of increasing lenghts. If two strings have the same length, their relative order must be the same as the intial array.

Exemple : 
input array : const strs = ["abc", "", "aaa", "a", "zz"];
output : sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"];

Use the method sort();

*/

function sortByLength(strs) {
    strs.sort((a, b) => a.length - b.length);
    return strs;
}

/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});