function Calculator(num1, num2) {
    this.a = num1
    this.b = num2
}
Calculator.prototype.multiply = function () {
    return this.a * this.b
}
Calculator.prototype.subtract = function () {
    return this.a - this.b
}
Calculator.prototype.add = function () {
    return this.a + this.b
}
Calculator.prototype.divide = function () {
    return this.a / this.b
}

let op1 = new Calculator(10, 2)

console.log(`The result is: ${op1.divide()}`);
