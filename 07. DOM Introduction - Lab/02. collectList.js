function extractText() {
  const liItems = document.querySelectorAll('li');
  const textArea = document.querySelector('#result');
  textArea.textContent =
    Array
      .from(liItems)
      .reduce((acc, li) => {
        return acc += li.textContent + '\n'
      }, '');
};