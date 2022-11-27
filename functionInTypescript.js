// Function in typescript
// example :
// define function return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//define function prams type like this 👇
function calculation(a) {
    return 12;
}
// Optional parameters
function multiply(a, b, c) {
    return a * b * (c || 1);
}
console.log(multiply(12, 15));
// rest parameter
function added(a, b, c) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    return a + b + c + rest.reduce(function (accumulator, data) { return accumulator + data; }, 0);
}
console.log(added(12, 14, 15, 11, 5));
