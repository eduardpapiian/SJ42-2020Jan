// Function within a function http://www.codewars.com/kata/a-function-within-a-function

// return a function that returns n
function always(n) {
    return function() {
        return n;
    };
}

// Singleton pattern https://www.codewars.com/kata/singleton-pattern/train/javascript

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
