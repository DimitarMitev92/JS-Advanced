function solve() {
    const recipientNameInput = document.querySelector('#recipientName');
    const titleInput = document.querySelector('#title');
    const messageInput = document.querySelector('#message');
    const btnAdd = document.querySelector('#add');
    const btnReset = document.querySelector('#reset');
    const ulListOfEmails = document.querySelector('#list');
    const ulSendEmails = document.querySelector('.sent-list');
    const ulDeleteEmails = document.querySelector('.delete-list');

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    });

    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();

        const titleInputText = titleInput.value;
        titleInput.value = '';
        const recipientNameInputText = recipientNameInput.value;
        recipientNameInput.value = '';
        const messageInputText = messageInput.value;
        messageInput.value = '';

        if (!titleInputText || !recipientNameInputText || !messageInputText) {
            return;
        }

        const liEmails = document.createElement('li');

        const h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleInputText}`;

        const h4RecipientName = document.createElement('h4');
        h4RecipientName.textContent = `Recipient Name: ${recipientNameInputText}`;

        const spanMsg = document.createElement('span');
        spanMsg.textContent = `${messageInputText}`;

        const divBtns = document.createElement('div');
        divBtns.setAttribute('id', 'list-action');

        const btnSend = document.createElement('button');
        btnSend.textContent = 'Send';
        btnSend.setAttribute('type', 'submit');
        btnSend.setAttribute('id', 'send');
        btnSend.addEventListener('click', function (e) {
            e.preventDefault();

            const liSendEmails = document.createElement('li');

            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipientNameInputText}`;

            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleInputText}`;

            const divBtn = document.createElement('div');
            divBtn.setAttribute('class', 'btn');

            const btnDeleteEmail = document.createElement('button');
            btnDeleteEmail.textContent = 'Delete';
            btnDeleteEmail.setAttribute('type', 'submit');
            btnDeleteEmail.setAttribute('class', 'delete');
            btnDeleteEmail.addEventListener('click', function (e) {
                e.preventDefault();

                const liDel2 = document.createElement('li');

                const spanToDel2 = document.createElement('span');
                spanToDel2.textContent = `To: ${recipientNameInputText}`;

                const spanTitleDel2 = document.createElement('span');
                spanTitleDel2.textContent = `Title: ${titleInputText}`;

                liDel2.appendChild(spanToDel2);
                liDel2.appendChild(spanTitleDel2);

                ulDeleteEmails.appendChild(liDel2);

                e.target.parentElement.parentElement.remove();
            });

            divBtn.appendChild(btnDeleteEmail);

            liSendEmails.appendChild(spanTo);
            liSendEmails.appendChild(spanTitle);
            liSendEmails.appendChild(divBtn);

            ulSendEmails.appendChild(liSendEmails);

            e.target.parentElement.parentElement.remove();

        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.setAttribute('type', 'submit');
        btnDelete.setAttribute('id', 'delete');
        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();

            const liDel = document.createElement('li');

            const spanToDel = document.createElement('span');
            spanToDel.textContent = `To: ${recipientNameInputText}`;

            const spanTitleDel = document.createElement('span');
            spanTitleDel.textContent = `Title: ${titleInputText}`;

            liDel.appendChild(spanToDel);
            liDel.appendChild(spanTitleDel);

            ulDeleteEmails.appendChild(liDel);

            e.target.parentElement.parentElement.remove();
        });

        divBtns.appendChild(btnSend);
        divBtns.appendChild(btnDelete);

        liEmails.appendChild(h4Title);
        liEmails.appendChild(h4RecipientName);
        liEmails.appendChild(spanMsg);
        liEmails.appendChild(divBtns);

        ulListOfEmails.appendChild(liEmails);
    });
}