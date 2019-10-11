const assert = require("chai").assert
const NumberToWord = require("../src/js/numberToWord");

describe('Numeber to Word', function () {
    let output;
    const numberToWord = new NumberToWord();
    const convert = (number) => numberToWord.convert(number);
    const assertEqual = (actual, expected) => assert.equal(actual, expected);
    
    describe('Convert single digit Numbers', ()=> {
        it('Should return "Zero" for number 0', function () {
            output = convert(0);
    
            assertEqual('Zero', output);
        });
        
        it('should convert to "One" for number 1', () => {        
            output = convert(1);
            
            assertEqual('One', output);
        });
    
        it('should convert to "Two" for number 2', () => {
            output = convert(2);
    
            assertEqual('Two', output)
        });
    })

    describe('Convert Double digit numbers', () => {
        it('should convert to "Ten" for number 10', () => {
            output = convert(10);

            assertEqual('Ten', output);
        });
    })
});