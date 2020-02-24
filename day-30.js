// SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface


function isSantaClausable(obj) {
  return typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) === 'function';
}

// Cylon Evolution http://www.codewars.com/kata/cylon-evolution

function Cylon(model) {
  this.model = model;
  this.attack = function() {
    return "Destroy all humans!";
  };
}

function HumanSkin(model) {
  Cylon.call(this, model);
  this.infiltrate = function() {
    return "Infiltrate the colonies";
  };
}

HumanSkin.prototype = new Cylon();
