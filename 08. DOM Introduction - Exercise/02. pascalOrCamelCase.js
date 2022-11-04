function solve() {
  const textArr = Array.from(document.getElementById('text').value.split(' '));
  console.log(textArr);
  const namingConvention = document.getElementById('naming-convention').value;
  if (namingConvention !== "Camel Case" && namingConvention !== "Pascal Case") {
    return document.getElementById('result').textContent = 'Error!';
  }

  let result = ''
  for (let i = 0; i < textArr.length; i++) {

    if (i === 0 && namingConvention === 'Camel Case') {
      const currentWord = textArr[i].toLowerCase();
      result += currentWord;
      continue;
    }

    const currentWord = textArr[i][0].toUpperCase() + textArr[i].substring(1).toLowerCase();
    result += currentWord;
  }
  return document.getElementById('result').textContent = result;
}