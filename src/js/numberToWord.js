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

        word = singleDigitWordList[number] || this.convertDoubleDigitNumberUntil20(number);

        return word;
    }

    convertDoubleDigitNumberUntil20(number) {
        const doubleDigitWordListUntil20 = {
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen",
            20: "Twenty"
        }
        return doubleDigitWordListUntil20[number];
    }
}

module.exports = numberToWord;