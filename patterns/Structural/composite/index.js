"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageNode {
    paint() { }
    calculateSize() { }
}
class ContainerNode {
    constructor() {
        this.children = [];
    }
    paint() {
        this.children.forEach((node) => node.paint());
    }
    calculateSize() {
        this.children.forEach((node) => node.calculateSize());
    }
    add(node) {
        this.children.push(node);
    }
}
const root = new ContainerNode();
root.add(new StorageNode());
root.add(new StorageNode());
root.add(new StorageNode());
root.add(new StorageNode());
function paint(node) {
    node.paint();
    node.calculateSize();
}
paint(root);
