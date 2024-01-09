// 1. High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
// 2. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

interface IDatabase {
  insert(data: any): void
  update(data: any): void
  delete(data: any): void
}

interface IBudgetReport {
  database: IDatabase
  open(date: Date): string
  save(): void
}

class MongoDB implements IDatabase {
  insert(data: any): void {
    console.log(`Invoking MongoDB with data ${JSON.stringify(data)}`)
  }

  update(data: any): void {
    console.log(`Update MongoDB with data ${JSON.stringify(data)}`)
  }

  delete() {
    console.log(`Data was deleted successfully`)
  }
}

class MySQL implements IDatabase {
  insert(data: any): void {
    console.log(`Invoking MySQL with data ${JSON.stringify(data)}`)
  }

  update(data: any): void {
    console.log(`Update MySQL with data ${JSON.stringify(data)}`)
  }

  delete() {
    console.log(`Data was deleted successfully`)
  }
}

class BudgetReport implements IBudgetReport {
  constructor(public database: IDatabase) {}

  open(date: Date) {
    return `Opening budget report: ${date}`
  }

  save() {
    console.log('Report saved.')
  }
}
const mongoDB = new MongoDB()
const mysqlDB = new MySQL()

const budgetReport1 = new BudgetReport(mongoDB)
const budgetReport2 = new BudgetReport(mysqlDB)

// second
//v1 bad

class App {
  player = new Player();
}

class Player {
  tracking = new Tracking();
}

class Tracking {}

// v2 good

interface AbstractPlayer {
  play(): void;
  pause(): void;
}

interface AbstractTracking {
  sendTracking(): void;
}

class App1 {
  player: AbstractPlayer;

  constructor(player: AbstractPlayer) {
    this.player = player;
  }
}

class Player1 implements AbstractPlayer {
  tracking: AbstractTracking;

  constructor(tracking: AbstractTracking) {
    this.tracking = tracking;
  }

  play(): void {
    console.log('Music started')
  }
  pause(): void {
    console.log('Music paused')
  }
}

class Tracking1 implements AbstractTracking {
  sendTracking(): void {
    console.log('Sending tracking');
  }
}

const tracking = new Tracking1();
const player = new Player1(tracking);
const app = new App1(player);
