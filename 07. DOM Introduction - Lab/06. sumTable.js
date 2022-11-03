function sumTable() {
  const firstTableLastCol = document.querySelectorAll('table:first-child tr td:nth-child(2n)');
  document.querySelector('#sum').textContent = Array
    .from(firstTableLastCol)
    .slice(0, -1)
    .reduce((acc, el) => {
      return acc += Number(el.textContent);
    }, 0);
};