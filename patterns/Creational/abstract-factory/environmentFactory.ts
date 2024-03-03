export abstract class DB {
  public abstract connect(): void;
}
export abstract class FS {
  public abstract readFile(fileName: string): void;
}
export abstract class LogProvider {
  public abstract log(message: string): void;
}

export class MySqlDB extends DB{
  public connect() {
    console.log('Connected to MySQL');
  }
}

export class InMockMemoryDB extends DB{
  public connect() {
    console.log('Mocking DB in memory');
  }
}

export class S3FS extends FS {
  public readFile(filename: string) {
    console.log(`Reading file ${filename} from S3`);
  }
}

export class RealFS extends FS {
  public readFile(filename: string) {
    console.log(`Reading file ${filename} from a real FS`);
  }
}

export class MockFS extends FS {
  public readFile(filename: string) {
    console.log(`Mocking a read file call to ${filename}`);
  }
}

export class ConsoleLogProvider extends LogProvider {
  public log(message: string): void {
    console.log('Console log message', message);
  }
}

export class SentryLogProvider extends LogProvider {
  public log(message: string): void {
    console.log(`From Sentry: ${message}`);
  }
}

export abstract class EnvironmentFactory {
  public abstract getDB(): DB;
  public abstract getFS(): FS;
  public abstract getLogProvider(): LogProvider;
}

export class DevEnvironmentFactory extends EnvironmentFactory {
  public getDB(): DB {
    return new InMockMemoryDB()
  }

  public getFS(): FS {
    return new MockFS()
  }

  public getLogProvider(): LogProvider {
    return new ConsoleLogProvider()
  }
}

export class ProductionEnvironmentFactory extends EnvironmentFactory {
  public getDB(): DB {
    return new MySqlDB()
  }

  public getFS(): FS {
    return new RealFS()
  }

  public getLogProvider(): LogProvider {
    return new SentryLogProvider()
  }
}

export function client (environmentFactory: EnvironmentFactory) {
  const db = environmentFactory.getDB()

  db.connect()

  const logProvider = environmentFactory.getLogProvider()

  logProvider.log('Initializing...')

  const fs = environmentFactory.getFS()

  fs.readFile('./log.txt')
}

if(process.env.NODE_ENV === 'production') {
  client(new ProductionEnvironmentFactory())
} else {
  client(new DevEnvironmentFactory())
}
