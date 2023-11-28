/*
Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter.
*/
function counter(initValue) {

    var currentValue = initValue;

    var increment = function(step) {

        currentValue += step;
        console.log('currentValue = ' + currentValue);
    };

    return increment;
}

var incrementCounter = counter(0);

incrementCounter(1);
incrementCounter(2);
incrementCounter(3);