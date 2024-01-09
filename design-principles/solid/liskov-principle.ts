// 1. The parameter types of a subclass method must be the same or abstract than the base method's parameter types.

interface IAnimal {
  type: string
  eat(): void
  sleep(): void
}

interface ICat extends IAnimal {
  name: string
}

interface IBengalCat extends ICat {
  species: string
}

class Animal implements IAnimal {
  constructor(public type: string) {
  }

  eat() {
    console.log('I want to eat');
  }

  sleep() {
    console.log('I want to sleep');
  }
}

class Cat implements ICat {
  public type: string = 'cat'
  constructor(public name: string) {
  }

  eat() {
    console.log('I want to eat');
  }

  sleep() {
    console.log('I want to sleep');
  }
}

class BengalCat implements ICat {
  public type: string = 'cat'
  public species: string = 'bengal'
  constructor(public name: string) {}

  eat() {
    console.log('I want to eat');
  }

  sleep() {
    console.log('I want to sleep');
  }
}

const animal = new Animal('cat')
const cat = new Cat('Murzik')
const bengalCat = new BengalCat('Tima')

function feed(animal: IAnimal) {
  return animal.type
}

feed(animal)
feed(cat)
feed(bengalCat)

// 2. The return type of a subclass method must match or be a subtype of the base class

function buyCat(): ICat {
  return cat || bengalCat
}

function buyCat2(): ICat {
  //@ts-expect-error
  return animal
}

// 3. The method should not tighten the preconditions, The method post-conditions should not be weakened.
interface IDocument {
  data: {
    text: string,
    format: string
    changed: boolean
  },
  filename: string

  open(): string
  save(): string
}

class TestDocument implements IDocument {
  constructor(public data: IDocument["data"], public filename: string) {}

  open() {
    return 'Document opened'
  }
  save() {
    if (this.data.changed) {
      return "Document saved"
    }

    throw new Error('Document was not saved, data was not changed')
  }
}

class ReadOnlyDocument implements IDocument {
  constructor(public data: IDocument["data"], public filename: string) {}

  open() {
    return 'Document opened'
  }

  //The method post-conditions should not be weakened.
  //@ts-expect-error
  save(): void {
    throw new Error('Unable to save read-only document');
  }
}

interface IDocument2{
  data: {
    text: string,
    format: string
    changed: boolean
  },
  filename: string

  open(): string
}

interface IWritableDocument2{
  data: {
    text: string,
    format: string
    changed: boolean
  },
  filename: string

  open(): string
  save(): string
}

class TestDocument2 implements IDocument2 {
  constructor(public data: IDocument["data"], public filename: string) {}

  open() {
    return 'Document opened'
  }
}

class WritableDocument implements IDocument2 {
  constructor(public data: IDocument["data"], public filename: string) {}

  open() {
    return 'Document opened'
  }

  save() {
    return 'Document saved'
  }
}

interface IProject {
  documents: IDocument2[]
  writableDocuments?: IWritableDocument2[]
  openAll(): void
  saveAll(): void
}

class Project implements IProject{
  constructor(public documents: IDocument2[], public writableDocuments?: IWritableDocument2[]) {}

  openAll(): void {
    this.documents.forEach(document => {
      document.open()
    })
  }
  saveAll() {
    if (this.writableDocuments) {
      this.writableDocuments.forEach(document => {
        document.save()
      })
    }
  }
}

const documents = [new TestDocument2({
  format: 'pdf', text: "new text", changed: false
},'New File'), new TestDocument2({
  format: 'pdf', text: "new text 2", changed: false
},'New File 2')]

const writableDocuments = [new WritableDocument({
  format: 'pdf', text: "new text", changed: false
},'New File')]

const project = new Project(documents, writableDocuments)

//a subclass should not change the values of private fields
//class invariants must remain unchanged
