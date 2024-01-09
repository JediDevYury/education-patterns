//bad
enum ShippingTypes {
  AIR = 'air',
  GROUND = 'ground'
}

interface IItem {
  name: string,
  weight: number
}

interface IOrder2 {
  lineItems: IItem[]
  shipping: ShippingTypes

  getTotal(): number
  getShippingCost(): number
  getTotalWeight(): number
}

class Order2 implements IOrder2{
  lineItems = [{
    name: "book",
    weight: 1
  }, {
    name: "toy",
    weight: 3
  }]
  constructor(public shipping: ShippingTypes) {}

  getTotal(){
    return this.lineItems.length
  }

  getTotalWeight(){
    return this.lineItems.reduce((total, {weight}) => total += weight, 0)
  }

  getShippingCost() {
    if(this.shipping === ShippingTypes.GROUND) {
      if(this.getTotal() < 100) {
        return 0
      }

      return Math.max(10, this.getTotalWeight() * 1.5)
    }

    if(this.shipping === ShippingTypes.AIR) {
      return Math.max(20, this.getTotalWeight() * 3)
    }

    return 0
  }
}

//good

interface IOrder3 {
  lineItems: IItem[]

  getTotal(): number
  getShippingCost(): number
  getTotalWeight(): number
}

interface IShipping {
  type: ShippingTypes
  getCost(order: IOrder3): number
  getDate(): Date
}

class Order3 implements IOrder3{
  lineItems = [{
    name: "book",
    weight: 1
  }, {
    name: "toy",
    weight: 3
  }]

  constructor(public shipping: IShipping) {}

  getTotal(){
    return this.lineItems.length
  }

  getTotalWeight(){
    return this.lineItems.reduce((total, {weight}) => total += weight, 0)
  }

  getShippingCost(): number {
    return this.shipping.getCost(this) || 0
  }
}

class Ground implements IShipping{
  type = ShippingTypes.GROUND
  getCost(order: IOrder2): number {
    if(order.getTotal() < 100) {
      return 0
    }

    return Math.max(10, order.getTotalWeight() * 1.5)
  }
  getDate() {
    const date = new Date()

    date.setDate(new Date().getDate() + 2)

    return date
  }
}

class Air implements IShipping{
  type = ShippingTypes.AIR
  getCost(order: IOrder2) {
    return Math.max(20, order.getTotalWeight() * 3)
  }

  getDate() {
    const date = new Date()

    date.setDate(new Date().getDate() + 1)

    return date
  }
}

const airDeliveryCost = new Order3(new Air()).getShippingCost()
const groundDeliveryCost = new Order3(new Ground()).getShippingCost()

