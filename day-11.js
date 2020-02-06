// Playing with Sets : Equal or Not ? https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  const myArr = [];
  Array.from(s1).forEach(val => {
    Array.from(s2).forEach(bal => {
      if (val === bal) {
        myArr.push(val);
      }
    });
  });
  return Array.from(s1).length === myArr.length;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}


function areEqual (s1,s2) {
  return s1.size === s2.size && [...s1].every(val => s2.has(val));
}

function notEqual (s1,s2) {
  return !areEqual(s1,s2);
}
