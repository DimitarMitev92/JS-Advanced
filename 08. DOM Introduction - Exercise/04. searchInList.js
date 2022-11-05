function search() {

  const towns = document.querySelectorAll('li');
  const searchText = document.getElementById('searchText').value;
  let matches = 0;
  for (let town of towns) {
    if (town.textContent.includes(searchText)) {
      matches++;
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
    }
  }
  document.getElementById('result').textContent = `${matches} matches found`
}