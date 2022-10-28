function lowestPrices(array) {
    let resultArr = [];
    for (let line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (resultArr.length === 0) {
            const productObj = {
                product: product,
                price: price,
                town: town
            };
            resultArr.push(productObj);
        } else {
            let isFound = false;
            for (let line of resultArr) {
                if (line.product === product) {
                    if (line.price > price) {
                        line.price = price;
                        line.town = town;
                        isFound = true;
                    } else {
                        isFound = true;
                    }
                }
            }
            if (!isFound) {
                const productObj = {
                    product: product,
                    price: price,
                    town: town
                }
                resultArr.push(productObj);

            }
        }
    }
    for (let line of resultArr) {
        console.log(`${line.product} -> ${line.price} (${line.town})`);
    }
}