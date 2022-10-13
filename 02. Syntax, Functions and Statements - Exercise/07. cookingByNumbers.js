function cookingByNumber(...params) {
    let num = Number(params.shift());

    const objOperations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    };

    params.forEach(operation => console.log(num = objOperations[operation](num)));
}