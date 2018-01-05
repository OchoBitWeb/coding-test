class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      // not Full coverage or Special Full coverage
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        // Price not zero
        if (this.products[i].price > 0) {
          // not Mega coverage
          if (this.products[i].name != 'Mega Coverage') {
            // decrease price of normal product (medium or low)
            this.products[i].price = this.products[i].price - 1;
            if (this.products[i].name == 'Super Sale') {
              // Products degrade in price twice as fast as normal Products.
              this.products[i].price = this.products[i].price - 1;
            }
          }
        }
      } else {
        if (this.products[i].price < 50) {
          // "Full Coverage" actually increases in price the older it gets.
          this.products[i].price = this.products[i].price + 1;
          // "Special Full Coverage", increases in price as its sellIn value approaches
          if (this.products[i].name == 'Special Full Coverage') {
            // price increases by 2 when there are 10 days or less
            if (this.products[i].sellIn < 11) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
            // price increases by 3 when there are 5 days or less
            if (this.products[i].sellIn < 6) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
          }
        }
      }
      // not Mega coverage (applys to anything else)
      // decrease SellIn
      if (this.products[i].name != 'Mega Coverage') {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
      // no more days left
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].name != 'Super Sale') {
              if (this.products[i].price > 0) {
                if (this.products[i].name != 'Mega Coverage') {
                  this.products[i].price = this.products[i].price - 1;
                }
              }
            }
            // price drops to 0 when no more days left (and the product is not valid anymore).
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1;
          }
        }
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
