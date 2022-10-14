function evenPositionElement(arr) {
    return arr.filter((curr, i) => i % 2 === 0).join(' ');
}