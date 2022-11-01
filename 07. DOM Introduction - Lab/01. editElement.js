function editElement(refer, match, replacer) {
  refer.textContent = refer.textContent.split(match).join(replacer);
};