function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b)).forEach((curr, i) => console.log(`${i + 1}.${curr}`));
}