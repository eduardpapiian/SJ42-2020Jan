// #6: Basic data types--Boolean and conditional statements if..else http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val){
  if (val) return 'true';
  else return 'false';
}

function trueOrFalse(val){
  return val ? 'true' : 'false';
}

const  trueOrFalse = val => val ? 'true' : 'false';

// #7: if..else and ternary operator http://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}

const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

// #8: Conditional statement--switch http://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month){
  var days;
  switch (month){
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}

function howManydays(month){
  switch (month){
    case 2: return 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}
