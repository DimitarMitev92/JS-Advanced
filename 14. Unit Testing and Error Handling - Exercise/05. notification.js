function notify(message) {
    const divEl = document.getElementById('notification');

    divEl.textContent = message;
    divEl.style.display = 'block';

    divEl.addEventListener('click', () => {
        divEl.style.display = 'none';
    });
}