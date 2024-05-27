"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
function readApplicationConfigFile() {
    return os.type();
}
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.initialize = function () {
        var config = readApplicationConfigFile();
        console.log(config);
        if (config === 'Windows_NT') {
            this.dialog = new WindowsDialog();
        }
        else if (config === 'Darwin') {
            this.dialog = new MacDialog();
        }
        else {
            throw new Error("Error! Unknown operating system.");
        }
    };
    Application.prototype.main = function () {
        this.initialize();
        this.dialog.render();
    };
    return Application;
}());
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        console.log("Windows Button");
    };
    WindowsButton.prototype.onClick = function (action) {
        action();
    };
    return WindowsButton;
}());
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.render = function () {
        console.log("Mac Button");
    };
    MacButton.prototype.onClick = function (action) {
        action();
    };
    return MacButton;
}());
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.closeDialog = function () {
        console.log("Dialog closed");
    };
    Dialog.prototype.render = function () {
        var okButton = this.createButton();
        // okButton.onClick(this.closeDialog);
        okButton.render();
    };
    return Dialog;
}());
var WindowsDialog = /** @class */ (function (_super) {
    __extends(WindowsDialog, _super);
    function WindowsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsDialog.prototype.createButton = function () {
        return new WindowsButton();
    };
    return WindowsDialog;
}(Dialog));
var MacDialog = /** @class */ (function (_super) {
    __extends(MacDialog, _super);
    function MacDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacDialog.prototype.createButton = function () {
        return new MacButton();
    };
    return MacDialog;
}(Dialog));
var app = new Application();
app.main();
