class User {
  id: unknown;
  firstName: string;
  lastName: string;
  email: string;

  constructor({firstName, lastName, email} : {
    firstName:string, lastName: string, email: string
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  async getPosts() {
    const posts = await fetch(`https://my.cms.com/posts/user/${this.id}`);
    return posts;
  }
}

const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});
