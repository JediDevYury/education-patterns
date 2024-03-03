type Shape = "circle" | 'square' | 'line'

export interface Clonable<T> {
  clone(): T;
}

export class ComponentPrototype implements Clonable<ComponentPrototype> {
  clone(): ComponentPrototype {
    return {...this}
  }
}

export class Document extends ComponentPrototype {
  components: ComponentPrototype[] = []
  clone(): Document {
    const clonedDocument = new Document()
    clonedDocument.components = this.components.map(c => c.clone())
    return clonedDocument
  }

  add(component: ComponentPrototype) {
    this.components.push(component)
  }
}

export class Title extends ComponentPrototype {
  constructor(public text: string) {
    super();
  }

  setText(text: string) {
    this.text = text;
  }
}


export class Drawing extends ComponentPrototype {
  constructor(public shape: Shape) {
    super()
  }

  setShape(shape: Shape) {
    this.shape = shape
  }
}

export class TextBox extends ComponentPrototype {
  constructor(public text: string) {
    super()
  }

  setText(text: string) {
    this.text = text
  }
}

export class Link extends ComponentPrototype {
  constructor(public text: string, public url: string) {
    super()
  }

  setText(text: string) {
    this.text = text
  }

  setUrl(url: string) {
    this.url = url
  }
}

const document = new Document()
const title = new TextBox('Title')
const textBox = new TextBox('Text')
const drawing = new Drawing('circle')
const link = new Link('Link', 'http://example.com')

document.add(title)
document.add(textBox)
document.add(drawing)
document.add(link)

export const clonedDocument = document.clone()

title.setText('New Title for original document')
textBox.setText('New Text for original document')
