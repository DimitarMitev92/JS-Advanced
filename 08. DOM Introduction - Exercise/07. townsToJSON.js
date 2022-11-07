function storeCatalogue(array) {
  let resultArr = [];
  for (let line of array) {
    let firstChar = line[0];
    if (resultArr.length === 0) {
      let obj = {
        firstChar: firstChar,
        products: [line]
      }
      resultArr.push(obj)
    } else {
      let isFound = false;
      for (let obj of resultArr) {
        if (obj.firstChar === firstChar) {
          obj.products.push(line);
          isFound = true;
        }
      }
      if (!isFound) {
        let obj = {
          firstChar: firstChar,
          products: [line]
        }
        resultArr.push(obj);
      }
    }
  }
  let sortedArr = resultArr.sort((a, b) => a.firstChar.localeCompare(b.firstChar));
  for (let line of sortedArr) {
    console.log(line.firstChar);
    for (let product of line.products.sort((a, b) => a.localeCompare(b))) {
      product = product.replace(' : ', ': ');
      console.log(`  ${product}`);
    }
  }
}