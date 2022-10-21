function sortingNumbers(arr) {
    const firstPart = arr.sort((a, b) => a - b).slice(0, arr.length / 2);
    const secondPart = arr.sort((a, b) => a - b).slice(arr.length / 2).reverse();
    const resArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
        let firstEl = firstPart.shift();
        let secondEl = secondPart.shift();
        if (firstEl !== undefined) {
            resArr.push(firstEl);
        }
        if (secondEl !== undefined) {
            resArr.push(secondEl);
        }
    }
    return resArr;
}