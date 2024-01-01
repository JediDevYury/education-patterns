class Class1 {}
class Class3 {}

class Class2 {
  parent;

  constructor(parent) {
    this.parent = parent;
  }
}

new Class2(new Class1());
new Class2(new Class3());
