describe('ChristmaxMovies', () => {
    let obj;
    beforeEach(function () {
        obj = new ChristmasMovies;
    });

    describe('constructor tests', () => {
        it('movueCollection => []', () => {
            expect(obj.movieCollection).to.deep.equal([]);
        });
        it('watched => {}', () => {
            expect(obj.watched).to.deep.equal({});
        });
        it('actors => []', () => {
            expect(obj.actors).to.deep.equal([]);
        });
    });

    describe('buyMovie() tests', () => {
        it('Buy movie message', () => {
            expect(obj.buyMovie('Movie', ['Person1', 'Person2'])).to.equal('You just got Movie to your collection in which Person1, Person2 are taking part!');
        });
        it('Added in collection', () => {
            obj.buyMovie('Movie', ['Person1', 'Person2']);
            expect(obj.movieCollection[0].name).to.equal('Movie');
        });
        it('Unique actors', () => {
            obj.buyMovie('Movie', ['Person1', 'Person1', 'Person2']);
            expect(obj.movieCollection[0].actors).to.deep.equal(['Person1', 'Person2']);
        });
        it('Already buyed => Error', () => {
            obj.buyMovie('Movie', ['Person1', 'Person2']);
            expect(() => obj.buyMovie('Movie', ['Person', 'Person2'])).to.throw(Error, 'You already own Movie in your collection!');
        });
    });

    describe('discardMovie() tests', () => {
        it('Invalid movie => Error', () => {
            expect(() => obj.discardMovie('Movie')).to.throw(Error, 'Movie is not at your collection!');
        });
        it('Discard message', () => {
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            expect(obj.discardMovie('Movie')).to.equal('You just threw away Movie!');
        });
        it('Clear collection', () => {
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.discardMovie('Movie');
            expect(obj.movieCollection).to.deep.equal([]);
        });
        it('Clear watched', () => {
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.discardMovie('Movie');
            expect(obj.watched).to.deep.equal({});
        });
    });
    describe('watchMovie() tests', () => {
        it('Invalid movie => Error', () => {
            expect(() => obj.watchMovie('Movie')).to.throw(Error, 'No such movie in your collection!');
        });
        it('Add in watched', () => {
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            expect(obj.watched['Movie']).to.equal(1);
        });
        it('Increase watched value', () => {
            obj.buyMovie('Movie', ['P1', 'P2']);
            obj.watchMovie('Movie');
            obj.watchMovie('Movie');
            expect(obj.watched['Movie']).to.equal(2);
        });
    });
    describe('favouriteMovie() tests', () => {
        it('No movies => Error', () => {
            expect(() => obj.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it('Favourite movies message', () => {
            obj.buyMovie('Movie1', ['Person1']);
            obj.buyMovie('Movie2', ['Person2']);
            obj.watchMovie('Movie1');
            obj.watchMovie('Movie2');
            obj.watchMovie('Movie1');
            expect(obj.favouriteMovie()).to.equal('Your favourite movie is Movie1 and you have watched it 2 times!');
        });
    });
    describe('mostStarredActor() tests', () => {
        it('No movies => Error', () => {
            expect(() => obj.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it('Most started actor message', () => {
            obj.buyMovie('Movie1', ['Person1']);
            obj.buyMovie('Movie2', ['Person2']);
            obj.buyMovie('Movie3', ['Person1']);
            expect(obj.mostStarredActor()).to.equal('The most starred actor is Person1 and starred in 2 movies!');
        });
    });
});