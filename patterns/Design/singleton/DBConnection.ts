
class DBConnection {
  instance: unknown;
  uri: string;
  isConnected = false;

  constructor(uri: string) {
    if (this.instance) {
      throw new Error('Only one connection can exist!');
    }
    this.uri = uri;
    this.instance = this;
  }

  connect() {
    this.isConnected = true;
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    this.isConnected = false;
    console.log('DB disconnected');
  }
}

const databaseConnector = Object.freeze(new DBConnection('mongodb://...'));
