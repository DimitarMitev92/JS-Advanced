function addAndRemoveElements(arr) {
    let currNum = 1;
    let resultArr = [];

    arr.forEach(command => {
        if (command === 'add') {
            resultArr.push(currNum);
            currNum++;
        } else if (command === 'remove') {
            resultArr.pop(currNum);
            currNum++;
        };
    });

    console.log(resultArr.length > 0 ? resultArr.join('\n') : 'Empty');
};