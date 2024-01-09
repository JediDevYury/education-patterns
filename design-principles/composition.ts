interface Engine {
  name: string,
  type: EngineTypes
}

interface Driver {
  name: string
  type: DriverType
}

enum EngineTypes {
  COMBUSTION = 'combustion',
  ELECTRIC = 'electric'
}

enum DriverType {
  HUMAN = "human",
  ROBOT = "robot"
}

class CombustionEngine {
  name = 'engine'
  type = EngineTypes["COMBUSTION"]
}

class ElectricEngine {
  name = 'engine'
  type = EngineTypes["ELECTRIC"]
}

class Human {
  name = 'Egor'
  type = DriverType["HUMAN"]
}

class Robot {
  name = 'Zoia'
  type = DriverType["ROBOT"]
}

const combustionEngine = new CombustionEngine()
const electricEngine = new ElectricEngine()
const human = new Human()
const robot = new Robot()

class Transport {
  constructor(public engine: Engine, public driver: Driver) {}
}

const newTransport = new Transport(electricEngine, human)
