import * as os from "os";

interface Dialog {
  render(): void;
  closeDialog(): void;
}

interface Button {
  render(): void;
  onClick(action: () => void): void;
}

function readApplicationConfigFile() {
  return os.type()
}

class Application {
  dialog!: Dialog;
  initialize() {
    const config = readApplicationConfigFile();
    console.log(config)
    if(config === 'Windows_NT') {
      this.dialog = new WindowsDialog();
    } else if (config === 'Darwin') {
      this.dialog = new MacDialog();
    } else {
      throw new Error("Error! Unknown operating system.");
    }
  }

  main() {
    this.initialize();
    this.dialog.render();
  }
}

class WindowsButton implements Button {
  render() {
    console.log("Windows Button");
  }

  onClick(action: () => void) {
    action();
  }
}

class MacButton implements Button {
  render() {
    console.log("Mac Button");
  }

  onClick(action: () => void){
    action();
  }
}


abstract class Dialog  {
  abstract createButton(): Button;
  closeDialog(): void {
    console.log("Dialog closed");
  }

  render() {
    const okButton = this.createButton();
    // okButton.onClick(this.closeDialog);
    okButton.render();
  }
}

class WindowsDialog extends Dialog {
  createButton() {
    return new WindowsButton();
  }
}

class MacDialog extends Dialog {
  createButton() {
    return new MacButton();
  }
}

const app = new Application();
app.main();
