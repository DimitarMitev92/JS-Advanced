function attachEventsListeners() {

    const inputFieldElement = document.querySelector('#inputDistance');
    const unitFromElement = document.querySelector('#inputUnits');
    const outputFieldElement = document.querySelector('#outputDistance');
    const unitToElement = document.querySelector('#outputUnits');
    const convertButtonElement = document.querySelector('#convert');

    const conversionRatesFromMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }
    convertButtonElement.addEventListener('click', function () {

        const convertFrom = unitFromElement.value;
        const convertTo = unitToElement.value;

        const valueInMeters = inputFieldElement.value * conversionRatesFromMeter[convertFrom];
        const convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
        outputFieldElement.value = convertedValue;
    });
}