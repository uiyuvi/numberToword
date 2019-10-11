const assert = require("chai").assert
const NumberToWord = require("../src/js/numberToWord");

describe('Numeber to Word', function () {
    it('Should return "Zero" for number 0', function () {
        let output;
        const numberToWord = new NumberToWord();

        output = numberToWord.convert(0);

        assert.equal('Zero', output);
    });
});