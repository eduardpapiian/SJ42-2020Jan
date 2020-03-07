// Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
    let number = 1;
    while (number) {
        let result = yield number++;
        number = result || number;
    }
}

// Generators #2 https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(value) {
    for (let i = 1; i < 15; i++) {
        yield `${value} x ${i} = ${value * i}`;
    }
}
