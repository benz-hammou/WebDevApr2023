function Calculator(num1, num2, mathSymbol) {
    this.num1 = num1
    this.num2 = num2
    this.mathSymbol = mathSymbol
}

Calculator.prototype.GetResult = function () {
    switch (this.mathSymbol) {
        case "+":
            return this.num1 + this.num2

        case "-":
            return this.num1 - this.num2

        case "*":
            return this.num1 * this.num2

        case "/":
            return this.num1 / this.num2

        default:
            return "---------------------------------\nThis is not a valid operator !!!\n---------------------------------"
    }
}

let operation = new Calculator(5, 6, "l")

console.log(operation.GetResult());