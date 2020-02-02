// Error Throwing - Error Handling #2 https://www.codewars.com/kata/55e7650c8d894146be000095/


function validateMessage(msg) {
    if(msg === null){
        throw ReferenceError('Message is null!')
    }else if(typeof msg !== 'string'){
        throw TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    }else if(!msg.length || msg.length > 255){
        throw RangeError(`Message contains ${msg.length} characters!`)
    }else return !(/<.*>/.test(msg));
}


function validateMessage(msg) {
    if(msg === null){
        throw ReferenceError('Message is null!')
    }else if(typeof msg !== 'string'){
        throw TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    }else if(!msg.length || msg.length > 255){
        throw RangeError(`Message contains ${msg.length} characters!`)
    }else return !isHTML(msg);
}

const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
