function cityTaxes(name, population, treasury) {
    const result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function (percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecession: function (percentage) {
            this.treasury -= this.treasury * percentage / 100;
        },
    };
    return result;
}