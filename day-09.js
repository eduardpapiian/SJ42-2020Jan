// #16: Methods of String object--slice(), substring() and substr() http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr){
  return arr.map(val => val.slice(0, arr.reduce((a,b) => a.length <= b.length ? a : b).length))
}

// #17: Methods of String object--indexOf(), lastIndexOf() and search() http://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str,c){
  return str.indexOf(c) < 0 ? str.indexOf(c) : str.lastIndexOf(c) - str.indexOf(c)
}

// #18: Methods of String object--concat() split() and its good friend join()" http://www.codewars.com/kata/57280481e8118511f7000ffa"

function splitAndMerge(string, separator) {
  return string.split(" ").map(val => val.split('').join(separator)).join(' ')
}
