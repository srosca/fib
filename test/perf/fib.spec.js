var fib = require('../../src/fib.js');
var fibLoop = require('../../src/fibLoop.js');

module.exports = {

    name: 'Fibonacci 0 - 20',
    tests: {
        'fib ': function() {
            fib(0);
            fib(5);
            fib(12);
            fib(20);
        },
        'fib Loop': function() {
            fibLoop(0);
            fibLoop(5);
            fibLoop(12);
            fibLoop(20);
        }
    }
};

