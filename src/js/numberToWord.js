class numberToWord {
    convert (number) {
        const singleDigitWordList = {
            0: 'Zero',
            1: 'One',           
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine'
        };
        let word;

        word = singleDigitWordList[number] || this.converDoubleDigitNumber(number);

        return word;
    }

    converDoubleDigitNumber(number) {
        if(number === 10) {
            return "Ten";
        } else {
            return "Eleven"
        }
    }
}

module.exports = numberToWord;