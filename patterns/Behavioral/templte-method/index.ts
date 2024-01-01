export abstract class Calculator {
  abstract calculateA(): number;
  abstract calculateB(): number;
  abstract calculateC(): number;
  abstract calculateD(): number;

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
