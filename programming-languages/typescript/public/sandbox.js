"use strict";
var greet;
greet = function () {
    console.log('test');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 4, '20');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// will automatically change result value to number
