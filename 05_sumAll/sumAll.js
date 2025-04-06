const sumAll = function(sumStart, sumEnd ) {
    let sumAll = 0;

    if(sumStart > sumEnd) {
        [sumStart, sumEnd] = [sumEnd , sumStart];
    }
    
    if(!Number.isInteger(sumStart) || !Number.isInteger(sumEnd) || 
      (sumEnd < 0 || sumStart < 0)) {
        return "ERROR";
    }

    for ( ;sumStart <= sumEnd; sumStart++) {
         sumAll += sumStart;        
    }
    return sumAll;
};

sumAll(2.5, 4);
// Do not edit below this line
module.exports = sumAll;
