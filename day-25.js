// Call function using apply http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function(context, ...arg) {
  return this.apply(context, arg);
};

// Anonymous returns http://www.codewars.com/kata/anonymous-returns

name = 'The Window';

var alpha = {
  name: "My Alpha",
  getNameFunc: function() {
    const { name } = this;
    return function() {
      return name;
    };
  }
};
