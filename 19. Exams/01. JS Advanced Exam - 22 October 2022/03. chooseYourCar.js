describe('Tests', () => {
    describe('choosingType', () => {
        it('correct input', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', '2010')).to.equal('This black Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'black', '2012')).to.equal('This black Sedan meets the requirements, that you have.');
        });

        it('incorrect input', () => {
            expect(() => chooseYourCar.choosingType('test', 'test', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('test', 'test', 2023)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('test', 'test', 2020)).to.throw('This type of car is not what you are looking for.');

            expect(chooseYourCar.choosingType('Sedan', 'black', '2000')).to.equal(`This Sedan is too old for you, especially with that black color.`);

        });

    });
    describe('brandName', () => {
        it('correct input', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
        });

        it('incorrect input', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 'test')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [1])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], { '1': 1 })).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], true)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], undefined)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], null)).to.throw('Invalid Information!');


            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');

            expect(() => chooseYourCar.brandName('test', 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(1, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName({ 'test': 1 }, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(true, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(undefined, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(null, 0)).to.throw('Invalid Information!');

        });

    });
    describe('carFuelConsumption', () => {
        it('correct input', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
        });

        it('incorrect input', () => {
            expect(() => chooseYourCar.carFuelConsumption(100, 'test')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, [1])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, { '1': 1 })).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, true)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, undefined)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, null)).to.throw('Invalid Information!');


            expect(() => chooseYourCar.carFuelConsumption('test', 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption([1], 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption({ '1': 1 }, 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(true, 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(undefined, 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(null, 100)).to.throw('Invalid Information!');

            expect(() => chooseYourCar.carFuelConsumption(0, 100)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-20, 100)).to.throw('Invalid Information!');
        });
    });
});