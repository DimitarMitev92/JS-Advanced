function create(words) {
    let div = document.getElementById('content');
    for (let word of words) {
        let divEl = document.createElement('div');
        let pEl = document.createElement('p');
        pEl.textContent = word;
        pEl.style.display = 'none';
        divEl.appendChild(pEl);
        divEl.addEventListener('click', onClick);

        function onClick() {
            pEl.style.display = 'inline-block';
        }
        div.appendChild(divEl);
    }
}