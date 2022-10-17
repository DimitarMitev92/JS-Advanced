function processOddPositions(arr) {
    return arr.filter((num, i) => i % 2 !== 0).map(num => num * 2).reverse().join(' ');
}