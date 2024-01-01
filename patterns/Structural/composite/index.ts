export interface Node {
  paint(): void;
  calculateSize(): void;
}

class StorageNode implements Node {
  paint(): void {}
  calculateSize(): void {}
}

class ContainerNode implements Node {
  children: Node[] = [];
  paint(): void {
    this.children.forEach((node) => node.paint());
  }

  calculateSize(): void {
    this.children.forEach((node) => node.calculateSize());
  }

  add(node: Node) {
    this.children.push(node);
  }
}

const root = new ContainerNode();
root.add(new StorageNode());
root.add(new StorageNode());
root.add(new StorageNode());
root.add(new StorageNode());

function paint(node: Node) {
  node.paint();
  node.calculateSize();
}

paint(root);
