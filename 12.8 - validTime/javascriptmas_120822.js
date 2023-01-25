function validTime(str) {

let dividedTime = str.split(':');
let minutes = parseInt(dividedTime[1]);
let hours = parseInt(dividedTime[0]);
	//Hours
	if (hours > 23 || hours < 0)
		return false;
	//Minutes
    if (minutes > 59 || minutes < 0)
    	return false;
    return true;
}

//Jasmine
/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '11:11';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '77:11';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '11:77';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});