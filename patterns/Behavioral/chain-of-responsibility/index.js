"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = exports.CheckUserRoleMiddleware = exports.CustomerMiddleware = void 0;
class CustomerMiddleware {
    setNext(next) {
        this.next = next;
        return this.next;
    }
    handle() {
        if (true) {
            //change condition
            this.next.handle();
        }
    }
}
exports.CustomerMiddleware = CustomerMiddleware;
class CheckUserRoleMiddleware {
    constructor() {
        this.isAuthorized = true;
    }
    setNext(next) {
        this.next = next;
        return this.next;
    }
    handle() {
        if (this.isAuthorized) {
            //change condition
            this.next.handle();
        }
    }
}
exports.CheckUserRoleMiddleware = CheckUserRoleMiddleware;
class LoggerMiddleware {
    constructor() {
        this.isAuthorized = true;
    }
    setNext(next) {
        this.next = next;
        return this.next;
    }
    handle() {
        console.log("invoke");
        this.next.handle();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
const m1 = new CustomerMiddleware();
const checkUserMiddleware = new CheckUserRoleMiddleware();
const logger = new LoggerMiddleware();
const m2 = new CustomerMiddleware();
const m3 = new CustomerMiddleware();
const m4 = new CustomerMiddleware();
const m5 = new CustomerMiddleware();
m1.setNext(logger)
    .setNext(checkUserMiddleware)
    .setNext(m2)
    .setNext(m3)
    .setNext(m4)
    .setNext(m5);
m1.handle();
