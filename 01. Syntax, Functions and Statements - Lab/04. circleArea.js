function circleArea(param) {
    if (typeof param === 'number') {
        let area = param * param * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
    }
}