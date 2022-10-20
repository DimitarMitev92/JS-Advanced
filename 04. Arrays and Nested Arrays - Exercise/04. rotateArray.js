function rotateArray(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        const remove = arr.pop();
        arr.unshift(remove);
    }
    console.log(arr.join(' '));
}