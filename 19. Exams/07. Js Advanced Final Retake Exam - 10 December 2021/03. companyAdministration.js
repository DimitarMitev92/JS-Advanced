describe('Tests', () => {

    describe('hiringEmployee', () => {
        it('correct input', () => {
            expect(companyAdministration.hiringEmployee('Dimitar', 'Programmer', 3)).to.equal('Dimitar was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Dimitar', 'Programmer', 10)).to.equal('Dimitar was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Dimitar', 'Programmer', 2)).to.equal('Dimitar is not approved for this position.');
        });

        it('incorrect input', () => {
            expect(() => companyAdministration.hiringEmployee('test', 'test', 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', 1, 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', [1], 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', { '1': 1 }, 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', true, 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', undefined, 10)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('test', null, 10)).to.throw('We are not looking for workers for this position.');
        });
    });
    describe('calculateSalary', () => {
        it('correct input', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('incorrect input', () => {
            expect(() => companyAdministration.calculateSalary('test')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([1])).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary({ '1': 1 })).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(true)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(null)).to.throw('Invalid hours');
        });
    });

    describe('firedEmployee', () => {
        it('correct input', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });
        it('incorrect input', () => {
            expect(() => companyAdministration.firedEmployee('test', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({ '1': 1 }, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(true, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(null, 1)).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(['test'], 'test')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['test'], [1])).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['test'], { '1': 1 })).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['test'], true)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['test'], undefined)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['test'], null)).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');

        });
    });

});