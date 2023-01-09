function solution() {
    const input = document.querySelector('section.card:nth-child(1) > div:nth-child(2) > input:nth-child(1)');

    const ulListOfGifts = document.querySelector('section.card:nth-child(2) > ul:nth-child(2)');
    const ulSendGifts = document.querySelector('section.card:nth-child(3) > ul:nth-child(2)');
    const ulDiscardedGifts = document.querySelector('section.card:nth-child(4) > ul:nth-child(2)');

    const btnAddGift = document.querySelector('section.card:nth-child(1) > div:nth-child(2) > button:nth-child(2)');

    btnAddGift.addEventListener('click', function (e) {
        e.preventDefault();

        const liEl = document.createElement('li');
        liEl.setAttribute('class', 'gift');
        liEl.textContent = input.value;
        const btnSend = document.createElement('button');
        btnSend.textContent = 'Send';
        btnSend.setAttribute('id', 'sendButton');
        btnSend.addEventListener('click', function (e) {
            const liSend = document.createElement('li');
            liSend.setAttribute('class', 'gift');
            let text = e.target.parentElement.childNodes[0].textContent;
            liSend.textContent = text;
            ulSendGifts.appendChild(liSend);

            e.target.parentElement.remove();
        });


        const btnDiscard = document.createElement('button');
        btnDiscard.textContent = 'Discard';
        btnDiscard.setAttribute('id', 'discardButton');
        btnDiscard.addEventListener('click', function (e) {
            const liSend = document.createElement('li');
            liSend.setAttribute('class', 'gift');
            let text = e.target.parentElement.childNodes[0].textContent;
            liSend.textContent = text;
            ulDiscardedGifts.appendChild(liSend);

            e.target.parentElement.remove();
        });

        liEl.appendChild(btnSend);
        liEl.appendChild(btnDiscard);

        ulListOfGifts.appendChild(liEl);

        const sortedArr = Array.from(ulListOfGifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ulListOfGifts.appendChild(li));

        input.value = '';

    });
}