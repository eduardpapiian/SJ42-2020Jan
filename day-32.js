// "this"" is a problem - http://www.codewars.com/kata/this-is-a-problem
class NamedOne {
  constructor(first, last){
    // -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set giveNewFullName(newValue) {
    this.fullName = newValue.split(' ')
  }
}

var n = new NamedOne('John', 'Doe');
console.log('n', n);
console.log('full', n.fullName)
n.firstName = "Bill";
console.log('n2', n);
console.log('full2', n.fullName)

