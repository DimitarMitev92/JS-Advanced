function sameNumber(num) {
    const printOnCons = (value) => console.log(value);

    printOnCons([...new Set(num.toString())].length === 1 ?
        true :
        false);

    printOnCons(num
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, num) => acc + num, 0));
}