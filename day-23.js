// Unpacking arguments http://www.codewars.com/kata/unpacking-arguments

const spread = (func, args) => func(...args);

// For the sake of argument http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...num) {
  return num.every(isNumber);
}

function isNumber(el) {
  return typeof el === "number";
}
