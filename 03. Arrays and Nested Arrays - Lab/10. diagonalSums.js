function diagonalSums(matrix) {
    console.log(
        matrix.reduce((acc, _, i, matrix) => acc + matrix[i][i], 0),
        matrix.reduce((acc, _, i, matrix) => acc + matrix[i][matrix.length - 1 - i], 0));
};