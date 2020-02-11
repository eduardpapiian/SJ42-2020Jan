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

