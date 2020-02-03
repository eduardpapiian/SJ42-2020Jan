// Number object and its properties http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  const firstPartText = "Input number is ";
  switch (n) {
    case Number.NEGATIVE_INFINITY:
      return firstPartText + "Number.NEGATIVE_INFINITY";
    case Number.POSITIVE_INFINITY:
      return firstPartText + "Number.POSITIVE_INFINITY";
    case Number.MAX_VALUE:
      return firstPartText + "Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return firstPartText + "Number.MIN_VALUE";
    case Number(n):
      return firstPartText + n;
    default:
      return firstPartText + "Number.NaN";
  }
}

// Methods of Number object--toString() and toLocaleString(): https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  let string = "#";
  [r, g, b].forEach(val => {
    val = val.toString(16);
    if (val.length === 1) val = "0" + val;
    string = string.concat(val);
  });
  return string;
}

// Methods of Number object--toFixed(), toExponential() and toPrecision() http://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  let counter = 0;
  arr.map(val => (n > parseFloat(val.toFixed(2)) ? counter++ : null));
  return counter;
}

function howManySmaller(arr,n){
  return arr.filter(val => val.toFixed(2) < n).length
}
