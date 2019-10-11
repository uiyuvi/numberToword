class numberToWord {
    convert (number) {
        let word = "";
        if(number === 1) {
            word = 'One'
        } else if (number === 0){
            word = 'Zero';
        } else {
            word = 'Two';
        }         
        
        return word;
    }    
}

module.exports = numberToWord;