function sumOfNumbers(n, m) {
    const firstNum = Number(n);
    const secondNum = Number(m);
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    console.log(sum);
}