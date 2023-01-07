class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        if (this.allCustomers.find(customer => customer.firstName === firstName)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomers.push({ firstName, lastName, personalId, transactions: [], });
        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {
        const currentCustomer = this.allCustomers.find(customer => customer.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (!currentCustomer.totalMoney) {
                currentCustomer.totalMoney = amount;
            } else {
                currentCustomer.totalMoney += amount;
            }
            currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
            return `${currentCustomer.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        const currentCustomer = this.allCustomers.find(customer => customer.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (currentCustomer.totalMoney < amount) {
                throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
            } else {
                currentCustomer.totalMoney -= amount;
                currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
                return `${currentCustomer.totalMoney}$`;
            }
        }
    }


    customerInfo(personalId) {
        const currentCustomer = this.allCustomers.find(customer => customer.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        } else {
            let result = [`Bank name: ${this._bankName}`, `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`, `Customer ID: ${currentCustomer.personalId}`, `Total Money: ${currentCustomer.totalMoney}$`, `Transactions:`];

            for (let i = currentCustomer.transactions.length; i > 0; i--) {
                result.push(`${i}. ${currentCustomer.transactions[i - 1]}`);
            }
            return result.join('\n');
        }
    }
}