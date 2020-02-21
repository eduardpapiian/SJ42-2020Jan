// Power of bind http://www.codewars.com/kata/power-bind
Function.prototype.bind = function (ctx) {
  var func = this;

  return function() {
    if (this && this.prop) {
      return func.call(this);
    }

    return func.call(ctx);
  }
};

// Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions
const OrderPeople = function(people){
  return people.sort((a, b) => a.age - b.age);
}
