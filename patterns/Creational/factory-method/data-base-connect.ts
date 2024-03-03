export abstract class DBConnection {
  provider!: string;
  public connect() {
    console.log(`Connected to ${this.provider}`);
  }
}

export class MongoDBConnection extends DBConnection {
  provider!: string

  constructor() {
    super()
    this.provider = 'MongoDB'
  }
}

export class RedisDBConnection extends DBConnection {
  provider!: string

  constructor() {
    super()
    this.provider = 'RedisBD'
  }
}

export abstract class DBFactory {
  public abstract createDBConnection(): DBConnection;
}

export class MongoConnectionFactory extends DBFactory {
  createDBConnection(): DBConnection {
    return new MongoDBConnection ()
  };
}

export class RedisConnectionFactory extends DBFactory {
  createDBConnection(): DBConnection {
    return new RedisDBConnection()
  };
}

function main (dbConnectionFactory: DBFactory) {
  return dbConnectionFactory.createDBConnection()
}

switch (process.env.DB) {
  case 'Mongo':
    main(new MongoConnectionFactory());
    break;
  case 'Redis':
    main(new RedisConnectionFactory());
    break;
  default:
    console.error('Unknown DB');
}


