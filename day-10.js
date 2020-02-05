// #19: Methods of String object--toUpperCase() toLowerCase() and replace() http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map(char => char.replace(/.$/, char[char.length - 1].toLowerCase()))
    .join(" ");
}

// #20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a

//TODO
// function topSecret(str) {
//   const chars = str.split("");
//   for (let i = 0; i < chars.length; i++) {
//     switch (chars[i]) {
//       case "A":
//         chars[i] = "X";
//         break;
//       case "B":
//         chars[i] = "Y";
//         break;
//       case "C":
//         chars[i] = "Z";
//         break;
//       case "a":
//         chars[i] = "x";
//         break;
//       case "b":
//         chars[i] = "y";
//         break;
//       case "c":
//         chars[i] = "z";
//         break;
//       case " ":
//         continue;
//       case "!":
//         continue;
//       default:
//         chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
//     }
//   }
//   return chars.join("");
// }

// #21: Methods of String object--trim() and the string template http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  const trimed = s.trim();
  return `${trimed}\n${trimed}${trimed}\n${trimed}${trimed}${trimed}\n${trimed}${trimed}${trimed}${trimed}\n${trimed}${trimed}${trimed}${trimed}${trimed}`;
}
