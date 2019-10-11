const assert = require("chai").assert
const NumberToWord = require("../src/js/numberToWord");

describe('Numeber to Word', function () {
    let output;
    const numberToWord = new NumberToWord();

    it('Should return "Zero" for number 0', function () {
        output = numberToWord.convert(0);

        assert.equal('Zero', output);
    });
    
    it('should convert to "One" for number 1', () => {        
        output = numberToWord.convert(1);
        
        assert.equal('One', output);
    });
});