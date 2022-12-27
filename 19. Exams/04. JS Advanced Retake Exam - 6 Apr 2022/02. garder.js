class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error(`Not enough space in the garden.`);
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(el => el.plantName === plantName);
        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }


        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.quantity += quantity;
        plant.ripe = true;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(el => el.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let index = this.plants.findIndex(el => el.plantName === plantName);

        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`];

        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(el => el = el.plantName);

        result.push(`Plants in the garden: ${sortedPlants.join(', ')}`);

        if (this.storage.length === 0) {
            result.push(`Plants in storage: The storage is empty.`);
        } else {
            let storageInfo = [];
            this.storage.forEach(el => storageInfo.push(`${el.plantName} (${el.quantity})`));

            result.push(`Plants in storage: ${storageInfo.join(', ')}`);
        }
        return result.join('\n');
    }

}