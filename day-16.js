// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  let myArr = arr.slice().sort(function(a, b) {
    const aCounter = arr.filter(val => val === a).length;
    const bCounter = arr.filter(val => val === b).length;
    if (bCounter === aCounter) return b - a;
    else if (aCounter > bCounter) return 1;
    else return -1;
  });
  return myArr;
}


// #26: methods of arrayObject---map() http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  return arr.map(function(el, index, arr) {
    if (el.length % 2 === 0)
      return `${el.substring(0, el.length / 2)}|${el.substring(el.length / 2, el.length)}`;
    else
      return `${el.substring(0, Math.floor(el.length / 2))}|${el.slice(Math.floor(el.length / 2) + 1)}`;
  });
}

// #27: methods of arrayObject---filter() http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  return {
    S: scores.filter(val => val === 100).length,
    A: scores.filter(val => val < 100 && val >= 90).length,
    B: scores.filter(val => val < 90 && val >= 80).length,
    C: scores.filter(val => val < 80 && val >= 60).length,
    D: scores.filter(val => val < 60 && val >= 0).length,
    X: scores.filter(val => val === -1).length
  };
}

// #28: methods of arrayObject---every() and some() http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr){
  let a = 0;
  let b = 0;
  arr.some((x, i) => {
    let finded = i == arr.length-1 ? -1 : arr[i+1]
    if(x == Number(finded.toString().split('').reverse().join(''))){
      a = x;
      b = finded;
      return true
    }else{
      a = -1;
      b = -1;
      return false
    }
  });
  return [a, b];
}
