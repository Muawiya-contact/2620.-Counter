/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        const current = n;
        n += 1;
        return current;
    };
};

/** 
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
