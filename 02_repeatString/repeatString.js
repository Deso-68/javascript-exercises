    let number = 0;
    let string = "";
    const WORD = "hey";

const repeatString = function(word, number) {
    
    for(let i = 0; i < number; ++i) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
