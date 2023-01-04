describe('Tests', () => {
    describe('sumNumber', () => {
        it('correct input', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(1.1, 1.1)).to.equal('2.20');
            expect(testNumbers.sumNumbers(1.11, 1.11)).to.equal('2.22');
            expect(testNumbers.sumNumbers(111.11, 111.11)).to.equal('222.22');
        });

        it('incorrect input', () => {
            expect(testNumbers.sumNumbers('test', 1)).to.undefined;
            expect(testNumbers.sumNumbers([1], 1)).to.undefined;
            expect(testNumbers.sumNumbers({ '1': 1 }, 1)).to.undefined;
            expect(testNumbers.sumNumbers(true, 1)).to.undefined;
            expect(testNumbers.sumNumbers(undefined, 1)).to.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.undefined;

            expect(testNumbers.sumNumbers(1, 'test')).to.undefined;
            expect(testNumbers.sumNumbers(1, [1])).to.undefined;
            expect(testNumbers.sumNumbers(1, { '1': 1 })).to.undefined;
            expect(testNumbers.sumNumbers(1, true)).to.undefined;
            expect(testNumbers.sumNumbers(1, undefined)).to.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.undefined;
        });
    });

    describe('numberChecker', () => {
        it('correct input', () => {
            expect(testNumbers.numberChecker('0')).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker('1')).to.equal(`The number is odd!`);
            expect(testNumbers.numberChecker('2')).to.equal(`The number is even!`);

        });
        it('incorrect input', () => {
            expect(() => testNumbers.numberChecker('test')).to.throw(`The input is not a number!`);
            expect(() => testNumbers.numberChecker({ '1': 1 })).to.throw(`The input is not a number!`);
            expect(() => testNumbers.numberChecker(undefined)).to.throw(`The input is not a number!`);
        });
    });

    describe('averageSumArray', () => {
        it('correct input', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1])).to.equal(1);
            expect(testNumbers.averageSumArray([])).to.NaN;
        });
    });
});