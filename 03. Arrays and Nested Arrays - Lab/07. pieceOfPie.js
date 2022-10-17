function pieceOfPie(arr, firstPie, secondPie) {
    return arr.slice(arr.indexOf(firstPie), (arr.lastIndexOf(secondPie) + 1));
}