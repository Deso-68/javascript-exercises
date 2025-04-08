const add = (a, b) => (a + b); 

const subtract = (a, b) => (a - b); 

const sum = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = (numbers) => {
  return numbers.reduce((total, num) => total * num, 1);
};

multiply([2, 4, 6, 8, 10, 12, 14])

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
