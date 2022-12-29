describe('Tests', () => {

    describe('calcPriceOfFlowers', () => {
        it('correct input', () => {
            expect(flowerShop.calcPriceOfFlowers('test', 10, 10)).to.equal(`You need $100.00 to buy test!`);
            expect(flowerShop.calcPriceOfFlowers('test', 1, 1)).to.equal(`You need $1.00 to buy test!`);

        });

        it('incorrect input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers([1], 1, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers({ '1': 1 }, 1, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(true, 1, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 1, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(null, 1, 1)).to.throw(`Invalid input!`);

            expect(() => flowerShop.calcPriceOfFlowers('test', 'test', 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', [1], 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', { '1': 1 }, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', true, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', undefined, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', null, 1)).to.throw(`Invalid input!`);

            expect(() => flowerShop.calcPriceOfFlowers('test', 1, 'test')).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', 1, [1])).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', 1, { '1': 1 })).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', 1, true)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', 1, undefined)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('test', 1, null)).to.throw(`Invalid input!`);


        });
    });

    describe('checkFlowersAvailable', () => {
        it('corret input', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable('Hyacinth', ["Rose", "Lily", "Orchid"])).to.equal(`The Hyacinth are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers', () => {
        it('correct input', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal("Lily / Orchid");
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal("Rose / Lily");
        });

        it('incorrect input', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw("Invalid input!");
            expect(() => flowerShop.sellFlowers('test', 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers({ '1': 1 }, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(true, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(null, 1)).to.throw(`Invalid input!`);

            expect(() => flowerShop.sellFlowers(['test'], 'test')).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(['test'], [1])).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(['test'], { '1': 1 })).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(['test'], true)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(['test'], undefined)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(['test'], null)).to.throw(`Invalid input!`);
        });
    });

});