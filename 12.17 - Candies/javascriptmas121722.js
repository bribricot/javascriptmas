function candies(children, candy) {
    let result = candy / children;
    result = children * Math.floor(result);
    	return result;
}

function candies(children, candy) {
    let rest = candy % children;
    let total = candy - rest;
    	return total;
}


//Math.round() Arrondir vers le haut. Pas dans le cas d'une division.

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});