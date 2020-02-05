// #19: Methods of String object--toUpperCase() toLowerCase() and replace() http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map(char => char.replace(/.$/, char[char.length - 1].toLowerCase()))
    .join(" ");
}

// #20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a

