// Maximum Multiple https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound){
    for (let i = bound; i <= bound; i--){
      if(i % divisor === 0) return i
    }
}

function maxMultiple(divisor, bound){
    while (bound){
        if(bound % divisor === 0) return bound;
        bound--
    }
}

function maxMultiple(divisor, bound){
    return bound - bound % divisor
}

// Is he gonna survive? https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

const hero = (bullets, dragons) => dragons * 2 > bullets ? false : true

// 5 without numbers: https://www.codewars.com/kata/59441520102eaa25260000bf

const unusualFive = () => 'hello'.length;
