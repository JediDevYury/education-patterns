"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    calculate() {
        let result = this.calculateA();
        if (result > 0) {
            result += this.calculateB();
        }
        result -= this.calculateC();
        if (result < 0) {
            result += this.calculateD();
        }
    }
}
exports.Calculator = Calculator;
class CustomerCalculator extends Calculator {
    calculateA() {
        return 12;
    }
    calculateB() {
        return 56;
    }
    calculateC() {
        return 34;
    }
    calculateD() {
        return 90;
    }
}
