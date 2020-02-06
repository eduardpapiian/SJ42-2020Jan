// #19: Methods of String object--toUpperCase() toLowerCase() and replace() http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map(char => char.replace(/.$/, char[char.length - 1].toLowerCase()))
    .join(" ");
}

// #20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str) {
  const strArr = str.split("");
  for (i = 0; i < strArr.length; i++) {
    let char = strArr[i].charCodeAt();
    if ((char <= 99 && char >= 97) || (char <= 67 && char >= 65)) {
      strArr[i] = String.fromCharCode(char + 23);
    } else if (char <= 64) {
      continue;
    } else {
      strArr[i] = String.fromCharCode(char - 3);
    }
  }
  return strArr.join("");
}

//question1: The top secret file number is...
answer1="2466";
//question2: Super agent's name is...
answer2="DJomI";
//question3: He stole the treasure is...
answer3="Train tire";

// #21: Methods of String object--trim() and the string template http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  const trimed = s.trim();
  return `${trimed}\n${trimed}${trimed}\n${trimed}${trimed}${trimed}\n${trimed}${trimed}${trimed}${trimed}\n${trimed}${trimed}${trimed}${trimed}${trimed}`;
}
