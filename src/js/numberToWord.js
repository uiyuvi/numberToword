class numberToWord {
    convert (number) {   
        return (
                this.convertSingleDigitNumber(number) 
            ||  this.convertDoubleDigitNumberUntil19(number)
            ||  this.convertDoubleDigitNumberFrom21To99(number)
        );
    }

    convertSingleDigitNumber(number) {
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

        return singleDigitWordList[number]
    }

    convertDoubleDigitNumberUntil19(number) {
        const doubleDigitWordListUntil19 = {
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen"
        }
        return doubleDigitWordListUntil19[number];
    }

    convertDoubleDigitNumberFrom21To99(number) {
        return "Twenty One";
    }
}

module.exports = numberToWord;