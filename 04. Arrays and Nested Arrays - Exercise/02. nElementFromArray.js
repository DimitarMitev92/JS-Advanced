function printEveryNhElement(arr, num) {
    return arr.filter((curr, i) => i % num === 0);
};