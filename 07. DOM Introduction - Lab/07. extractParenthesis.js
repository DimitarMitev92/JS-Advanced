function extract(content) {
  const contentText = document.querySelector(`#${content}`).textContent;
  const regexPattern = /(?<=\().+?(?=\))/g;
  const found = contentText.match(regexPattern).join('; ');
  return found;
};