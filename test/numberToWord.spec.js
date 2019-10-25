const assert = require("chai").assert
const NumberToWord = require("../src/js/numberToWord");

describe('Numeber to Word', function () {
    let output;
    const numberToWord = new NumberToWord();
    const convert = (number) => numberToWord.convert(number);
    const assertEqual = (actual, expected) => assert.equal(actual, expected);

    describe('Convert single digit Numbers', () => {
        let testValues = [
            { number: 0, expected: "Zero" },
            { number: 1, expected: "One" },
            { number: 2, expected: "Two" },
            { number: 3, expected: "Three" },
            { number: 4, expected: "Four" },
            { number: 5, expected: "Five" },
            { number: 6, expected: "Six" },
            { number: 7, expected: "Seven" },
            { number: 8, expected: "Eight" },
            { number: 9, expected: "Nine" }
        ]

        testValues.forEach(testValue => {
            it(`Should return ${testValue.expected} for ${testValue.number}`, function () {
                output = convert(testValue.number);

                assertEqual(testValue.expected, output);
            });
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

        it('should convert to "Thirty" for number 30', () => {
            output = convert(30);

            assertEqual('Thirty', output);
        });

        it('should convert to "Seventy Eight" for number 78', () => {
            output = convert(78);

            assertEqual('Seventy Eight', output);
        });
    });

    describe('Convert Triple digit numbers from 100 to 999', () => {
        it('should convert to "One Hundred" for number 100', () => {
            output = convert(100);

            assertEqual('One Hundred', output);
        });

        it('should convert to "One Hundred One" for number 101', () => {
            output = convert(101);

            assertEqual('One Hundred One', output);
        });

        it('should convert to "Seven Hundred Eighty Six" for number 786', () => {
            output = convert(786);

            assertEqual('Seven Hundred Eighty Six', output);
        });
    });

    describe('Convert Triple digit numbers from 1000 to 9999', () => {
        it('should convert to "One Thousand" for number 1000', () => {
            output = convert(1000);

            assertEqual('One Thousand', output);
        });
    });
});