const assert = require("chai").assert
const NumberToWord = require("../src/js/numberToWord");

describe('Numeber to Word', function () {
    let output;
    const numberToWord = new NumberToWord();
    const convert = (number) => numberToWord.convert(number);
    const assertEqual = (actual, expected) => assert.equal(actual, expected);
    
    it('Should return "Zero" for number 0', function () {
        output = convert(0);

        assertEqual('Zero', output);
    });
    
    it('should convert to "One" for number 1', () => {        
        output = convert(1);
        
        assertEqual('One', output);
    });
});