class numberToWord {
    convert (number) {
        let word = (number === 1) ? "One": "Zero";
        
        return word;
    }    
}

module.exports = numberToWord;