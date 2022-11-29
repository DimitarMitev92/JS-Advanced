describe('sumOfNums', () => {
    it('Sum works', () => {
        expect(sum([1, 1, 1])).to.equal(3);
        expect(sum([1, 1])).to.equal(2);
        expect(sum([1])).to.equal(1);
    });
    it('Empty array', () => {
        expect(sum([])).to.equal(0);
    });
});