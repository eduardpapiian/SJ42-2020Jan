// Syntax task https://www.codewars.com/kata/is-this-my-tail/train/javascript

const correctTail = (body, tail) => body.substr(body.length - (tail.length)) === tail;

const correctTail = (body, tail) => body.endsWith(tail);

// Do I get a bonus https://www.codewars.com/kata/56f6ad906b88de513f000d96

const bonusTime = (salary, bonus) => bonus ? '£' + salary * 10 : '£' + salary;

const bonusTime = (salary, bonus)  => bonus ? `£${10 * salary}` : `£${salary}`;

// Automorphic number https://www.codewars.com/kata/5a58d889880385c2f40000aa

const automorphic = n => Number((n * n).toString().slice( -n.toString().length)) === n ? 'Automorphic' : 'Not!!';

const automorphic = n => (n * n).toString().slice( - n.toString().length) == n ? 'Automorphic' : 'Not!!';

function automorphic(n){
  return Math.pow(n,2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!"
}

function automorphic(n){
  const nLength = n.toString().length;
  const num = (n * n).toString();
  const lastChars = num.slice( -nLength);
  if(lastChars === n.toString()){
    return 'Automorphic'
  }else{
    return 'Not!!'
  }
}
