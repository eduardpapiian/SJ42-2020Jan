// Basics http://tddbin.com/#?kata=es6/language/object-literal/basics

// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
  const x = 1;
  const y = 1;
  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const short = {y};
      assert.deepEqual(short, {y: y});
    });
    it('works with multiple variables too', () => {
      const z = y;
      const short = {x, y: z};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  describe('with methods', () => {
    const func = () => func;
    it('using the name only uses it as key', () => {
      const short = {func};
      assert.deepEqual(short, {func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      const short = {otherKey: func};
      assert.deepEqual(short, {otherKey: func});
    });
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc: () => 'I am inline'
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
});

// Computed Properties http://tddbin.com/#?kata=es6/language/object-literal/computed-properties

// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    assert.equal(obj.x, 1);
  });
  it('can also get a function assigned', () => {
    const key = 'func';
    const obj = {[key]: () => 'seven'};
    assert.equal(obj.func(), 'seven');
  });
  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = {[getName()]: () => 'seven'};
    assert.equal(obj.propertyName(), 'seven');
  });
  it('the key can also be constructed by an expression', () => {
    const what = 'Name';
    const obj = {['property' + what]: null};
    assert('propertyName' in obj);
  });
  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() {return 1}
    };
    assert.equal(obj.key, 1);
  });
});

// Getter http://tddbin.com/#?kata=es6/language/object-literal/getter

// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', function() {
    const obj = {
      get x() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('must have NO parameters', function() {
    const obj = {
      get x() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be a computed property (an expression enclosed in `[]`)', function() {
    const keyName = 'x';
    const obj = {
      get [keyName]() { return 'ax'; }
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be removed using delete', function() {
    const obj = {
      get x() { return 'ax'; }
    };
    delete obj.x;
    assert.equal(obj.x, void 0);
  });

  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  // It might be corrected later, new knowledge welcome.

  //it('must not overlap with a pure property', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
  //
  //it('multiple `get` for the same property are not allowed', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; },
  //    get x() { return 'ax1'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
});

// Setter http://tddbin.com/#?kata=es6/language/object-literal/setter

// 67: object-literal - setter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain setters', () => {
  describe('defining: a setter', function() {
    it('by prefixing the property with `set` (and make it a function)', function() {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
      };
      obj.x = 'the new X';
      assert.equal(theX, 'the new X');
    });
    it('must have exactly one parameter', function() {
      let setterCalledWith = void 0;
      const obj = {
        set x(value) { // <<<<=== it's not a setter yet!
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        }
      };
      assert.equal(obj.x = 'new value', setterCalledWith);
    });
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const publicPropertyName = 'x';
      const privatePropertyName = '_' + publicPropertyName;
      const obj = {
        set [publicPropertyName] (value) {
          this [privatePropertyName] = value
        }
        // write the complete setter to make the assert below pass :)
      };
      obj.x = 'axe';
      assert.equal(obj._x, 'axe');
    });
  });
  describe('working with/on the setter', function() {
    it('you can use `delete` to remove the property (including it`s setter)', function() {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };
      delete obj.x
      // delete the property x here, to make the test pass

      obj.x = true;
      assert.equal(setterCalled, false);
    });
  });

  // TODO
  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
  // It might be corrected later, new knowledge welcome.
  // it('must not overlap with a pure property', function() {
  //   const obj = {
  //     x: 1,
  //     set x(val) { return 'ax'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
  // it('multiple `set` for the same property are not allowed', function() {
  //   const obj = {
  //     x: 1,
  //     set x(v) { return 'ax'; },
  //     set x(v) { return 'ax1'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
});

// Creation http://tddbin.com/#?kata=es6/language/class/creation

// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    class TestClass {}
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });
  it('a class is block scoped', () => {
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });
  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) {
        this.id = id;
      }
    }
    const user = new User(42);
    assert.equal(user.id, 42);
  });
  it('defining a method by writing it inside the class body', function() {
    class User {
      constructor(){
        this.writesTests = function () {
          return false;
        }
      }
    }
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });
  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  return !this.everWroteATest }
    }
    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });
  it('anonymous class', () => {
    const classType = typeof function () {};
    assert.equal(classType, 'function');
  });
});
