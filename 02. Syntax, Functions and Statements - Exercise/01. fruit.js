function fruit(fruit, weight, price) {
    const weightInKg = weight / 1000;
    const neededMoney = weightInKg * price;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
};