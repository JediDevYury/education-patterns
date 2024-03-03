interface Mediator2 {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator!: Mediator2;
  setMediator(mediator: Mediator2) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log('Notification sent');
  }
}

class Logger {
  log(message: string) {
    console.log('Log entry created');
  }
}

class EventHandler implements Mediated {
  mediator!: Mediator2;

  myEvent() {
    this.mediator.notify('event', 'myEvent');
  }

  setMediator(mediator: Mediator2) {
    this.mediator = mediator;
  }
}


class NotificationMediator implements Mediator2 {

  constructor(public notifications: Notifications, public logger: Logger, public eventHandler: EventHandler) {}

  notify(_: string, event: string) {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log('myEvent triggered');
        break;
      default:
        console.log('Unknown event');
    }
  }
}

const handler = new EventHandler();
const notifications = new Notifications();
const logger = new Logger();

const mediator = new NotificationMediator(notifications, logger, handler);

handler.setMediator(mediator);

handler.myEvent();

// Mediator - A behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
