interface Mediator {
  notify(sender: object, event: string, payload?: string): void;
}

class ChatUser {
  constructor(public name: string, private mediator: Mediator) {
    this.mediator.notify(this, 'subscribe');
  }

  receive(message?: string) {
    console.log(`${this.name} received: ${message}`);
  }
  publish(message: string) {
    this.mediator.notify(this, 'publish', message);
  }
}

class ChatRoom implements Mediator {
  private users: ChatUser[] = [];

  notify(sender: ChatUser, event: string, payload?: string) {
    if (event === 'subscribe') {
      console.log(`${sender.name} has joined the chat`);
      this.users.push(sender);
    }
    if (event === 'publish') {
      console.log(`${sender.name} has published: ${payload}`);
      const usersExcludingSender = this.users.filter((user) => user !== sender);
      usersExcludingSender.forEach((user) => user.receive(payload));
    }
  }
}

const chatRoom = new ChatRoom();
const chatUser1 = new ChatUser('Alice', chatRoom);
const chatUser2 = new ChatUser('Bob', chatRoom);
const chatUser3 = new ChatUser('Charlie', chatRoom);

chatUser1.publish('Hello, world!');
chatUser2.publish('Hi, there!');
chatUser3.publish('Hey, everyone!');
