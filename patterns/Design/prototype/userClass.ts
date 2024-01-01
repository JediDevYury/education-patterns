export class UserClass {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;

  constructor({ firstName, lastName, email }: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = email;
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  delete() {
    console.log('User removed');
  }
}

const user = new UserClass({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = new UserClass({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.delete === user2.delete);
