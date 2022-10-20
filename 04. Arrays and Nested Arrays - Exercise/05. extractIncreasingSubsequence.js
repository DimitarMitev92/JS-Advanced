function extractIncreasingSubsequenceFromArray(arr) {
    const resArr = [arr.shift()];
    arr.forEach(num => {
        if (num >= resArr[resArr.length - 1]) resArr.push(num);
    })
    return resArr;
}