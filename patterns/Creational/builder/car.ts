interface Builder {
  reset(): Builder
  setSeats(seats: number): Builder
  setEngine(engine: string): Builder
  setTripComputer(): Builder
  setGPS(): Builder
}

interface Car {
  engine: string
  seats: number
  tripComputer: boolean
  gps: boolean
}

interface Manual {
  engine: string
  seats: number
  tripComputer: boolean
  gps: boolean
}

const initialStructure = {
  engine: 'dieselEngine',
  seats: 0,
  tripComputer: false,
  gps: false,
}

class CarBuilder implements Builder {
  private car: Car = initialStructure

  reset() {
    this.car = initialStructure
    return this
  }

  setSeats(seats: number) {
    this.car.seats = seats
    return this
  }

  setEngine(engine: string) {
    this.car.engine = engine
    return this
  }

  setTripComputer() {
    this.car.tripComputer = true
    return this
  }

  setGPS() {
    this.car.gps = true
    return this
  }

  getResult() {
    return this
  }
}

class CarManualBuilder implements Builder {
  private manual: Manual = initialStructure

  reset() {
    this.manual = initialStructure
    return this
  }

  setSeats(seats: number) {
    this.manual.seats = seats
    return this
  }

  setEngine(engine: string) {
    this.manual.engine = engine
    return this
  }

  setTripComputer() {
    this.manual.tripComputer = true
    return this
  }

  setGPS() {
    this.manual.gps = true
    return this
  }

  getResult() {
    return this
  }
}


class Director {
  constructSportsCar(builder: Builder) {
    builder
      .reset()
      .setSeats(2)
      .setEngine('sportEngine')
      .setTripComputer()
      .setGPS()
  }

  constructSUV(builder: Builder) {
    builder
      .reset()
      .setSeats(4)
      .setEngine('dieselEngine')
      .setTripComputer()
      .setGPS()
  }
  constructCarManual(builder: Builder) {
    builder
      .reset()
      .setSeats(4)
      .setEngine('dieselEngine')
      .setGPS()
  }
}

function clientCode(director: Director) {
  const builder = new CarBuilder()
  director.constructSportsCar(builder)
  const car = builder.getResult()

  const manualBuilder = new CarManualBuilder()
  director.constructCarManual(manualBuilder)
  const manual = manualBuilder.getResult()

  return {car, manual}
}

const director = new Director()
const {car, manual} = clientCode(director)
