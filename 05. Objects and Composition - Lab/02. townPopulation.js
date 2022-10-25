function townPopulation(arr) {
    const obj = {};

    arr.forEach(str => {
        let [town, population] = str.split(' <-> ');
        population = +population;
        obj.hasOwnProperty(town) ? obj[town] += population : obj[town] = population;
    });
    for (let key in obj) console.log(`${key} : ${obj[key]} `);
}