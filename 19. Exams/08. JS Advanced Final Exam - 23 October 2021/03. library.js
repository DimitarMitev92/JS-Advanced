describe('Tests', () => {
    describe('calcPriceOfBook', () => {
        it('Incorrect input', () => {

            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([1], 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({ '1': 1 }, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(true, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 1)).to.throw('Invalid input');

            expect(() => library.calcPriceOfBook('test', '1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', [1])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', { '1': 1 })).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', true)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', undefined)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', null)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', 1.1)).to.throw('Invalid input');


        });

        it('Correct input', () => {
            expect(library.calcPriceOfBook('Test', 1980)).to.equal('Price of Test is 10.00');
            expect(library.calcPriceOfBook('Test', 1979)).to.equal('Price of Test is 10.00');
            expect(library.calcPriceOfBook('Test', 1981)).to.equal('Price of Test is 20.00');
        });
    });

    describe('findBook', () => {
        it('Correct input', () => {
            expect(() => library.findBook([], 'test')).to.throw('No books currently available');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Test", "Life Style", "Torronto"], 'Troy')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('Incorrect input', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
    });
});