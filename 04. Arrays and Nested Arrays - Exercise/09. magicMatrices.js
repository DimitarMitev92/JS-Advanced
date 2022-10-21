function magicMatrices(matrix) {
    let resultArr = [];
    for (let array of matrix) {
        let sum = array.reduce((acc, num) => acc + num);
        resultArr.push(sum);
    }
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            let currentNum = matrix[j][i];
            sum += currentNum;
        }
        resultArr.push(sum);
    }
    let isMagic = true;
    for (let k = 0; k < resultArr.length; k++) {
        for (let l = 0; l < resultArr.length; l++) {
            if (resultArr[k] !== resultArr[l]) {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}