// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

const solution = (...nums) => new Set(nums).size !== nums.length;

// Last Argument http://www.codewars.com/kata/last

function last(firstArg, ...secondArg){
  if (secondArg.length)  return secondArg[secondArg.length - 1];
  if (firstArg.length) return firstArg[firstArg.length - 1];
  return firstArg
}
