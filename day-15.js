// #22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...arr2) => {
  arr2.forEach(a => {
    [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]
  })
  return arr
}

// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8 #23: methods of arrayObject---push(), pop(), shift() and unshift()

function infiniteLoop(arr, d, n) {
  const myArr = [];

  arr.forEach(val => {
    myArr.push(...val);
  });

  for (let i = 0; i < n; i++) {
    if (d === "left") {
      const a = myArr.shift(i);
      myArr.push(a);
    } else {
      const a = myArr.pop(i);
      myArr.unshift(a);
    }
  }

  return arr.map(val => myArr.splice(0, val.length));
}

// #24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(arr){
  let newArr = arr.slice();
  let index = 0;
  let myArr = [];
  for(let i = 0; i < newArr.length; i +=3) {
    let sum = newArr.slice(index, index+3).reduce((a, b) => a + b);
    myArr.push(sum);
    index += 3;
  }
  return myArr
}
