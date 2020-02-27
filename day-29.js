// How new works https://www.codewars.com/kata/how-new-works

let myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.contructor = MyObject.constructor;
myObj.constructor();


// Replicate new http://www.codewars.com/kata/replicate-new

function nouveau(Constructor) {
    const obj = {};
    const arg = Array.prototype.slice.call(arguments, 1);
    obj.__proto__ = Constructor.prototype;
    obj.contructor = Constructor.constructor();
    obj.constructor(arg[0], arg[1], arg[2], arg[3]);
    return obj;
}
