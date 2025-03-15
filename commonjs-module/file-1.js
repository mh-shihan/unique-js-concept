const { num1, num2 } = require("./file-2.js");
const { add, subtract, multiply, division } = require("./utils");

console.log("Add -> ", add(num1, num2));
console.log("subtract -> ", subtract(num1, num2));
console.log("multiply -> ", multiply(num1, num2));
console.log("division -> ", division(num1, num2));
console.log("division -> ", division(num1, 0));
console.log(num1, num2);
