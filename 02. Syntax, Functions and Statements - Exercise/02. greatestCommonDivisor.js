function greatestCommonDivisor(firstNum, secondNum) {
    const maxNum = Math.max(firstNum, secondNum);
    let gcd;
    for (let i = 0; i <= maxNum; i++) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}