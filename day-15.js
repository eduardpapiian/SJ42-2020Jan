// #22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...arr2) => {
  arr2.forEach(function (a) {
    [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]
  });
  return arr
};
