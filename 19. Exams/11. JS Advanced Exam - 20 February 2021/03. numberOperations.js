describe('Tests', () => {
    describe('powNumber', () => {
        it('correct input', () => {
            expect(numberOperations.powNumber(1)).to.equal(1);
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(100)).to.equal(10000);
        });
    });

    describe('numberChecker', () => {
        it('correct input', () => {
            expect(numberOperations.numberChecker(1)).to.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(99)).to.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`);
            expect(numberOperations.numberChecker(101)).to.equal(`The number is greater or equal to 100!`);
        });

        it('incorrect input', () => {
            expect(() => numberOperations.numberChecker('test')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker({ '1': 1 })).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });
    });

    describe('sumArrays', () => {
        it('correct input', () => {
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
            expect(numberOperations.sumArrays([1, 2, 3], [1])).to.deep.equal([2, 2, 3]);
            expect(numberOperations.sumArrays([1], [1, 2, 3])).to.deep.equal([2, 2, 3]);
            expect(numberOperations.sumArrays([3, 2, 1, 0], [1, 2, 3])).to.deep.equal([4, 4, 4, 0]);
        });
    });
});