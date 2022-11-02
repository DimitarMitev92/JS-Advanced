function colorize() {
  const evenRows = document.querySelectorAll('table tr:nth-child(2n)');
  Array.from(evenRows).map(tr => tr.style.backgroundColor = 'Teal');
};