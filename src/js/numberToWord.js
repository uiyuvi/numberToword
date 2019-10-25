class numberToWord {
    convert(number) {
        return (
            this.convertSingleDigitNumber(number)
            || this.convertDoubleDigitNumberUntil19(number)
            || this.convertDoubleDigitNumberFrom20To99(number)
            || this.convertTripleDigitNumberFrom100To999(number)
            || this.convertFourDigitNumberFrom1000To9999()
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

    convertDoubleDigitNumberFrom20To99(number) {
        if (number > 99) {
            return;
        }
        const tensDigitWordFrom20To90 = {
            20: "Twenty",
            30: "Thirty",
            40: "Fourty",
            50: "Fifty",
            60: "Sixty",
            70: "Seventy",
            80: "Eighty",
            90: "Ninety"
        }
        if (number % 10 === 0) {
            return tensDigitWordFrom20To90[number];
        }
        const numberInString = number.toString();
        const tensPosition = numberInString[0] + 0;
        const onesPosition = numberInString[1];
        return tensDigitWordFrom20To90[tensPosition] + " " + this.convertSingleDigitNumber(onesPosition)
    }

    convertTripleDigitNumberFrom100To999(number) {
        if (number > 999) {
            return;
        }
        const numberInString = number.toString();
        const hundredsPosition = numberInString[0];
        const moduloOf100 = number % 100;
        if (moduloOf100 === 0) {
            return this.convertSingleDigitNumber(hundredsPosition) + " Hundred";
        }

        return this.convertSingleDigitNumber(hundredsPosition) + " Hundred " + this.convert(moduloOf100);
    }

    convertFourDigitNumberFrom1000To9999() {
        return "One Thousand";
    }
}

module.exports = numberToWord;