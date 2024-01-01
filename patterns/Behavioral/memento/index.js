export const Editor = {
  cursorPosition: {
    x: 12,
    y: 56,
  },
  currentFile: "src/components",

  getSnapshot() {
    return {
      cursorPosition: this.cursorPosition,
      currentFile: this.currentFile,
    };
  },
  restoreFromSnapshot(snapshot) {
    this.cursorPosition = snapshot.cursorPosition;
    this.currentFile = snapshot.currentFile;
  },
};
