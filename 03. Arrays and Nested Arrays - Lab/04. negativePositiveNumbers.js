function negativePositiveNums(arr) {
    let resultArr = [];
    arr.forEach(num => {
        num >= 0 ? resultArr.push(num) : resultArr.unshift(num);
    });
    console.log(resultArr.join('\n'));
}