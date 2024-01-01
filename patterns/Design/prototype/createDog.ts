class Animal {
  cellCount?: unknown;
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Dog extends Animal{
  constructor(public name: string, public age: number) {
    super(name, age)
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }

  wagTail() {
    console.log(`${this.name} is wagging their tail!`);
  }
}
