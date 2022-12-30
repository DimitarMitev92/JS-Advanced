function solve() {
    const productTypeInput = document.querySelector('#type-product');
    const descriptionInput = document.querySelector('#description');
    const clientNameInput = document.querySelector('#client-name');
    const clientPhoneInput = document.querySelector('#client-phone');

    const btnSend = document.querySelector('#right > form:nth-child(2) > button:nth-child(9)');

    const btnClear = document.querySelector('.clear-btn');

    const receivedOrders = document.querySelector('#received-orders');

    const completedOrders = document.querySelector('#completed-orders');
    console.log(completedOrders);

    btnSend.addEventListener('click', function (e) {

        e.preventDefault();

        const productTypeText = productTypeInput.value;
        productTypeInput.value = '';
        const descriptionText = descriptionInput.value;
        descriptionInput.value = '';
        const clientNameText = clientNameInput.value;
        clientNameInput.value = '';
        const clientPhoneText = clientPhoneInput.value;
        clientPhoneInput.value = '';

        if (!productTypeText || !descriptionText || !clientNameText || !clientPhoneText) {
            return;
        }

        const divOrder = document.createElement('div');
        divOrder.setAttribute('class', 'container');

        const h2Product = document.createElement('h2');
        h2Product.textContent = `Product type for repair: ${productTypeText}`;

        const h3Info = document.createElement('h3');
        h3Info.textContent = `Client information: ${clientNameText}, ${clientPhoneText}`;

        const h4Description = document.createElement('h4');
        h4Description.textContent = `Description of the problem: ${descriptionText}`;

        const btnStart = document.createElement('button');
        btnStart.textContent = 'Start repair';
        btnStart.setAttribute('class', 'start-btn');
        btnStart.addEventListener('click', function (e) {
            btnStart.disabled = true;
            e.target.nextSibling.disabled = false;
        });

        const btnFinish = document.createElement('button');
        btnFinish.textContent = 'Finish repair';
        btnFinish.disabled = true;
        btnFinish.setAttribute('class', 'finish-btn');
        btnFinish.addEventListener('click', function (e) {

            const divFinish = document.createElement('div');
            divFinish.setAttribute('class', 'container');

            const h2ProductFinish = document.createElement('h2');
            h2ProductFinish.textContent = `Product type for repair: ${h2Product.textContent.split('Product type for repair: ')[1]}`;

            const h3InfoFinish = document.createElement('h3');
            h3InfoFinish.textContent = `Client information: ${h3Info.textContent.split('Client information: ')[1]}`;

            const h4DescriptionFinsih = document.createElement('h4');
            h4DescriptionFinsih.textContent = `Description of the problem: ${h4Description.textContent.split('Description of the problem: ')[1]}`;

            divFinish.appendChild(h2ProductFinish);
            divFinish.appendChild(h3InfoFinish);
            divFinish.appendChild(h4DescriptionFinsih);

            completedOrders.appendChild(divFinish);

            e.target.parentElement.remove();
        });

        divOrder.appendChild(h2Product);
        divOrder.appendChild(h3Info);
        divOrder.appendChild(h4Description);
        divOrder.appendChild(btnStart);
        divOrder.appendChild(btnFinish);

        receivedOrders.appendChild(divOrder);

    });

    btnClear.addEventListener('click', function (e) {
        let parent = e.target.parentElement;
        Array.from(parent.querySelectorAll('div')).forEach(el => el.remove());

    });
}