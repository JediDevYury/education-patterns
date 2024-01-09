interface IOrder {
  lineItems: {
    name: string
    quantity: number
    price: number
  }[];
  country: string
}

interface ITaxCalculator {
  getTaxAmount(country: string): number;
}

class TaxCalculator implements ITaxCalculator {
  getTaxAmount(country:string): number{
    if(country === "US") {
      return 0.07;
    }

    if(country === "EU") {
      return 0.20;
    }

    return 0
  }
}

class Order implements IOrder {
  lineItems = [{
    name: 'Book',
    quantity: 3,
    price: 10
  }, {
    name: 'Sheet of Paper',
    quantity: 10,
    price: 2
  }]
  country = "US"
  taxCalculator = new TaxCalculator();

  getOrderTotal(order: ITaxCalculator) {
    let total = 0;

    for (const lineItem of this.lineItems) {
      total += lineItem.quantity * lineItem.price;
    }

    total += total + this.taxCalculator.getTaxAmount(this.country)

    return total
  }
}
