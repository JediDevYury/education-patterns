interface IEmployee {
  name: string;
  salary: number;
  doWork: () => void
}

class Tester implements IEmployee{
  name!: string;
  salary!: number;
  doWork!: () => void;
  employeeType: string = "Tester"
}

class Programmer implements IEmployee{
  name!: string;
  salary!: number;
  doWork!: () => void;
  employeeType: string = "Programmer"
}

class Designer implements IEmployee{
  name!: string;
  salary!: number;
  doWork!: () => void;
  employeeType: string = "Designer"
}

class Artist implements IEmployee{
  name!: string;
  salary!: number;
  doWork!: () => void;
  employeeType: string = "Artist"
}

interface ICompany {
  getEmployees: () => IEmployee[]
  createSoftware: () => void
}

abstract class Company implements ICompany {
  abstract getEmployees(): IEmployee[];
  abstract createSoftware(): void;
}

class GameDevCompany extends Company {
  getEmployees(): IEmployee[] {
    return [
     new Designer(),
     new Artist()
    ]
  }

  createSoftware() {
    console.log('Creating Game ...');
  }
}

class OutsourcingCompany extends Company {
  getEmployees(): IEmployee[] {
    return [
      new Programmer(),
      new Tester()
    ]
  }

  createSoftware() {
    console.log('Creating Web App ...');
  }
}

const gameDevEmployees = new GameDevCompany().getEmployees()
const outsourcingEmployees = new OutsourcingCompany().getEmployees()

console.log(gameDevEmployees, outsourcingEmployees)
