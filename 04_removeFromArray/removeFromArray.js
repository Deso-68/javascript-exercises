const removeFromArray = function(...testArray) {
    let fromArray = testArray[0];
    
    let newArray = fromArray.filter(removeNumber, testArray);


    let temp = newArray;
    return newArray;
};

removeFromArray([1, 2, 3, 4], 3, 2);

function removeNumber(number) {
    for (let i = 1; i < this.length; i++) {
        if(number !== this[i]) {
            continue;
        }
        else if(number === this[i]){
            return false;
        }
    }
    return true;
}


// Do not edit below this line
module.exports = removeFromArray;
