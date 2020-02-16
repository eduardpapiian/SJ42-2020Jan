// #37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals,count){
    return count.map(val => (animals.match(new RegExp(val,"g"))||[]).length)
}

// #38: Regular Expression--""^"",""$"", ""."" and test() http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
    let regstr = word[0] + Array(word.length - 1).join(".") + word.slice(-1);
    regstr = new RegExp("^" + regstr + "$");
    return str
        .split(" ")
        .filter(val => val.match(regstr))
        .join(" ");
}

// #39: Regular Expression--""?"", ""*"", ""+"" and ""{}"" https://www.codewars.com/kata/573bca07dffc1aa693000139

var regex=/^-?9[0-9]*?0{4,}$/
