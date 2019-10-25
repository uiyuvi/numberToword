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

    describe('Convert Double digit numbers until 19', () => {
        it('should convert to "Ten" for number 10', () => {
            output = convert(10);

            assertEqual('Ten', output);
        });

        it('should convert to "Eleven" for number 11', () => {
            output = convert(11);

            assertEqual('Eleven', output);
        });
    })

    describe('Convert Double digit numbers from 20 to 99', () => {
        it('should convert to "Twenty One" for number 21', () => {
            output = convert(21);

            assertEqual('Twenty One', output);
        });

        it('should convert to "Twenty" for number 20', () => {
            output = convert(20);

            assertEqual('Twenty', output);
        });
    });
});