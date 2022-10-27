function calorieObject(arrray) {
    let resultObj = {};
    for (let i = 0; i < arrray.length; i += 2) {
        const product = arrray[i];
        const calories = Number(arrray[i + 1])
        resultObj[product] = calories;
    }
    console.log(resultObj)
}