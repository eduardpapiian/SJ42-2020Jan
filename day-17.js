// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  return [].concat
    .apply([], arr)
    .sort((a, b) => b - a)
    .join('>');
}

// #30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr){
  const sumOfNum = [];
  arr.reduce(function (a, b) {
    sumOfNum.push(a % 10 + Number(b.toString().split('').shift()));
    return b
  });
  return sumOfNum.reduce((a, b) => a * b);
}

// #31: methods of arrayObject---isArray() indexOf() and toString() http://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  return !Array.isArray(arr)
    ? "It's a fake array"
    : arr.includes(5) && arr.includes(13)
      ? "It's a black array"
      : "It's a white array";
}

// Implement own reduce https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function(process, initial) {
  const arr = this;
  arr.forEach(val => {
    if (!initial){
      switch(typeof val){
        case 'string':
          initial = ''
          break;
        case 'number' :
          initial = 0;
          break;
      }
    }
    initial = process(initial, val)
  });
  return initial
};
