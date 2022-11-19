function solve(data, criteria) {
    let parseData = JSON.parse(data);
    const [key, value] = criteria.split('-');

    const resultArr = [];
    let counter = 0;
    for (let obj of parseData) {
        let resultStr = ''
        if (obj[key] === value) {
            resultStr = `${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
            counter++;
            resultArr.push(resultStr);
        }
    }
    console.log(resultArr.join('\n'));
}