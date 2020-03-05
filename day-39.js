// Create iterator https://www.codewars.com/kata/5c743cec901022438549964a

function createIterator(array){
    const iterator = {
        index: 0,
        next: function() {
            if (iterator.index < array.length) {
                return {
                    value: array[iterator.index++], done: false
                }
            }
            return {
                value: array[iterator.index], done: true
            }
        }
    };
    return iterator
}
