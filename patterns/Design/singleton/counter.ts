class Counter {
  instance: unknown;
  counter: number = 0;

  constructor() {
    if(this.instance) {
      throw new Error('You can only create one instance')
    }
    this.instance = this
  }

  getCount() {
    return this.counter
  }

  increment() {
    return ++this.counter
  }

  decrement() {
    return --this.counter
  }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter;
