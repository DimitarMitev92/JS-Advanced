class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (let line of vegetables) {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let currentVegetable = this.availableProducts.find(veg => veg.type === type);
            if (currentVegetable) {
                currentVegetable.quantity += quantity;
                if (currentVegetable.price < price) {
                    currentVegetable.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
            }

        }
        return `Successfully added ${this.availableProducts.map(el => el.type).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let line of selectedProducts) {
            let [type, quantity] = line.split(' ');
            quantity = Number(quantity);

            let currentVegetable = this.availableProducts.find(el => el.type === type);

            if (currentVegetable) {
                if (currentVegetable.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                } else {
                    let currentPrice = currentVegetable.price * quantity;
                    currentVegetable.quantity -= quantity;
                    totalPrice += currentPrice;
                }
            } else {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let currentVegetable = this.availableProducts.find(el => el.type === type);

        if (currentVegetable) {
            if (currentVegetable.quantity <= quantity) {
                currentVegetable.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                currentVegetable.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        } else {
            throw new Error(`${type} is not available in the store.`);
        }
    }

    revision() {
        let result = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price).forEach(veg => result.push(`${veg.type}-${veg.quantity}-$${veg.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}