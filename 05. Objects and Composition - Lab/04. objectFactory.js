function factory(library, orders) {
    const resArr = [];

    for (let order of orders) {
        let resObj = {};
        let { template, parts } = order;
        resObj.name = template.name;
        for (let func of parts) {
            resObj[func] = library[func];
        }
        resArr.push(resObj);
    }
    return resArr;
}