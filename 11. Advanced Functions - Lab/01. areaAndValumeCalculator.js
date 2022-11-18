function solve(area, vol, input) {
    const arr = JSON.parse(input);
    const resultArr = [];
    for (let obj of arr) {
        let { x, y, z } = obj;
        x = +x;
        y = +y;
        z = +z;
        let resultObj = {};
        let currArea = area.call(obj, x, y);
        let currVol = vol.call(obj, x, y, z);
        resultObj.area = currArea;
        resultObj.volume = currVol;
        resultArr.push(resultObj);
    }
    return resultArr;
}