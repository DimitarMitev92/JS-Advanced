function aggregateElements(arr) {
    function sum(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        console.log(result);
    }
    sum(arr);

    function sumInverse(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += 1 / arr[i];
        }
        console.log(result);
    }
    sumInverse(arr);

    function concat(arr) {
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            result += arr[i].toString();
        }
        console.log(result);
    }
    concat(arr);
}