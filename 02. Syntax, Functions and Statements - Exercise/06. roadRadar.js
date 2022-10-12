function roadRadar(speed, area) {
    const motorWay = 130;
    const iterstate = 90;
    const city = 50;
    const residential = 20;
    let status;
    if (area === 'motorway') {
        if (speed > motorWay) {
            if (speed - motorWay <= 20) {
                status = 'speeding';
            } else if (speed - motorWay <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speed - motorWay} km/h faster than the allowed speed of ${motorWay} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${motorWay} zone`);
        }
    } else if (area === 'interstate') {
        if (speed > iterstate) {
            if (speed - iterstate <= 20) {
                status = 'speeding';
            } else if (speed - iterstate <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speed - iterstate} km/h faster than the allowed speed of ${iterstate} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${iterstate} zone`);
        }
    } else if (area === 'city') {
        if (speed > city) {
            if (speed - city <= 20) {
                status = 'speeding';
            } else if (speed - city <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }
    } else if (area === 'residential') {
        if (speed > residential) {
            if (speed - residential <= 20) {
                status = 'speeding';
            } else if (speed - residential <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }
    }
};