function diagonalAttack(input) {
    let matrix = [];
    for (let line of input) {
        let currentArr = line.split(' ').map(Number);
        matrix.push(currentArr);
    }
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let j = 0; j < currentRow.length; j++) {
            if (i === j) {
                let firstDiagonalNum = matrix[i][j];
                firstDiagonalSum += firstDiagonalNum;
                let secondDiagonalNum = matrix[matrix.length - 1 - i][j];
                secondDiagonalSum += secondDiagonalNum;
            }
        }
    }
    if (firstDiagonalSum !== secondDiagonalSum) {
        matrix.forEach(el => console.log(el.join(' ')));
    } else {
        for (let k = 0; k < matrix.length; k++) {
            let currentRow = matrix[k];
            for (let l = 0; l < currentRow.length; l++) {
                if (k !== l && currentRow.length - 1 - k !== l) {
                    matrix[k][l] = firstDiagonalSum;
                }
            }
        }
        matrix.forEach(el => console.log(el.join(' ')));
    }
}