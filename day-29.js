// How new works https://www.codewars.com/kata/how-new-works

let myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.contructor = MyObject.constructor;
myObj.constructor();
