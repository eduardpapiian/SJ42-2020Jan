// Understanding closures - the basics https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n, b){
    const res = [];

    for (let i = 0; i < n; i++){
        res.push(function(){
            return i
        })
    }
    return res
}

// Shifty closures https://www.codewars.com/kata/shifty-closures/train/javascript
function hello(name) {
    return function (){
        return "Hello, " + name + '!';
    }
}

const greet_abe = hello('Abe');
const greet_ben = hello('Ben');
