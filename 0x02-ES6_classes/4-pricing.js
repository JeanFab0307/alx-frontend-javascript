class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'string') {
      throw new TypeError('amount must be a string');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value !== 'string') {
      throw new TypeError('currency must be a number');
    }
    this._currency = value;
  }
}

export default Pricing;
