function toggle() {
  const buttonMore = document.querySelector('.button').textContent;
  if (buttonMore === 'More') {
    document.querySelector('#extra').style.display = 'block';
    document.querySelector('.button').textContent = 'Less'
  } else if (buttonMore === 'Less') {
    document.querySelector('#extra').style.display = 'none';
    document.querySelector('.button').textContent = 'More'
  }
}