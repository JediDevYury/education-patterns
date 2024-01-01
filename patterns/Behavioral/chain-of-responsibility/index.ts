interface Middleware {
  setNext(next): Middleware;

  handle(): void;
}

export class CustomerMiddleware implements Middleware {
  next;
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

export class CheckUserRoleMiddleware implements Middleware {
  next;
  isAuthorized = true;
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
export class LoggerMiddleware implements Middleware {
  next;
  isAuthorized = true;
  setNext(next) {
    this.next = next;

    return this.next;
  }

  handle() {
    console.log("invoke");
    this.next.handle();
  }
}

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
