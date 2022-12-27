describe('Tests', () => {

    describe('isGenreSuitable', () => {
        it('Incorrect input', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        });

        it('Correct input', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Comedy', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Fantasy', 9)).to.equal(`Those books are suitable`);
        });
    });
    describe('isItAffordable', () => {
        it('Correct input', () => {
            expect(bookSelection.isItAffordable(10, 9)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(10, 10)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(10, 12)).to.equal(`Book bought. You have 2$ left`);
        });

        it('Incorrect input', () => {
            expect(() => bookSelection.isItAffordable(1, 'test')).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, [1])).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, { '1': 1 })).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, true)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, undefined)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(1, null)).to.throw(`Invalid input`);

            expect(() => bookSelection.isItAffordable('test', 1)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable([1], 1)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable({ '1': 1 }, 1)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(true, 1)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(undefined, 1)).to.throw(`Invalid input`);
            expect(() => bookSelection.isItAffordable(null, 1)).to.throw(`Invalid input`);

        });
    });

    describe('suitableTitles', () => {
        it('Correct input', () => {

            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(["The Da Vinci Code"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Avengers", genre: "Fantasy" }], 'Fantasy')).to.deep.equal(["Avengers"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'test')).to.deep.equal([]);
        });

        it('Incorrect input', () => {
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 1)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], [1])).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], { '1': 1 })).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], true)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], undefined)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], null)).to.throw('Invalid input');

            expect(() => bookSelection.suitableTitles(1, 'Horror')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles({ '1': 1 }, 'Horror')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles('test', 'Horror')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles(true, 'Horror')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles(undefined, 'Horror')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles(null, 'Horror')).to.throw('Invalid input');

        });
    });

});