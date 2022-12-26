describe('CarService', () => {
    describe('isItExpensive func', () => {
        it('Correct input', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);

        });
        it('Incorrect input', () => {
            expect(carService.isItExpensive('test')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('discount funt', () => {
        it('Correct input', () => {
            expect(carService.discount(1, 1000)).to.equal('You cannot apply a discount');
            expect(carService.discount(2, 1000)).to.equal('You cannot apply a discount');
            expect(carService.discount(3, 1000)).to.equal('Discount applied! You saved 150$');
            expect(carService.discount(7, 1000)).to.equal('Discount applied! You saved 150$');
            expect(carService.discount(8, 1000)).to.equal('Discount applied! You saved 300$');
        });
        it('Incorrect input', () => {
            expect(() => carService.discount('test', 1)).to.throw('Invalid input');
            expect(() => carService.discount([1], 1)).to.throw('Invalid input');
            expect(() => carService.discount({ '1': 1 }, 1)).to.throw('Invalid input');
            expect(() => carService.discount(undefined, 1)).to.throw('Invalid input');
            expect(() => carService.discount(null, 1)).to.throw('Invalid input');

            expect(() => carService.discount(1, 'test')).to.throw('Invalid input');
            expect(() => carService.discount(1, [1])).to.throw('Invalid input');
            expect(() => carService.discount(1, { '1': 1 })).to.throw('Invalid input');
            expect(() => carService.discount(1, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(1, null)).to.throw('Invalid input');
        });
    });

    describe('partsToBuy funct', () => {
        it('Correct input', () => {
            expect(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"])).to.equal(145);
            expect(carService.partsToBuy(
                [],
                ["blowoff valve", "injectors"])).to.equal(0);
            expect(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],
                ["blowoff valve", "injectors"])).to.equal(375);
        });

        it('Incorrect input', () => {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 'test')).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 1)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], { '1': 1 })).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], undefined)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], null)).to.throw('Invalid input');

            expect(() => carService.partsToBuy('test', ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy({ '1': 1 }, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(undefined, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(null, ["blowoff valve", "injectors"])).to.throw('Invalid input');
        });

    });
});