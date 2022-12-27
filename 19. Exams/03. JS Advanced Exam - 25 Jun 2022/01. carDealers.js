function solve() {
    const makeInput = document.querySelector('#make');
    const modelInput = document.querySelector('#model');
    const productionYearInput = document.querySelector('#year');
    const fuelTypeInput = document.querySelector('#fuel');
    const originalCostInput = document.querySelector('#original-cost');
    const sellingPriceInput = document.querySelector('#selling-price');

    const btnPublish = document.querySelector('#publish');

    const tBody = document.querySelector('#table-body');

    const ulCarList = document.querySelector('#cars-list');

    const profit = document.querySelector('#profit');

    btnPublish.addEventListener('click', function (e) {
        e.preventDefault();

        if (!makeInput.value || !modelInput.value || !productionYearInput.value || !fuelTypeInput.value || !originalCostInput.value || !sellingPriceInput.value || (originalCostInput.value > sellingPriceInput.value)) {
            return;
        }

        const makeInputValue = makeInput.value;
        makeInput.value = '';
        const modelInputValue = modelInput.value;
        modelInput.value = '';
        const productionYearInputValue = productionYearInput.value;
        productionYearInput.value = '';
        const fuelTypeInputValue = fuelTypeInput.value;
        fuelTypeInput.value = '';
        const originalCostInputValue = Number(originalCostInput.value);
        originalCostInput.value = '';
        const sellingPriceInputValue = Number(sellingPriceInput.value);
        sellingPriceInput.value = '';


        const tr = document.createElement('tr');

        const tdMake = document.createElement('td');
        tdMake.textContent = makeInputValue;
        const tdModel = document.createElement('td');
        tdModel.textContent = modelInputValue;
        const tdYear = document.createElement('td');
        tdYear.textContent = productionYearInputValue;
        const tdFuel = document.createElement('td');
        tdFuel.textContent = fuelTypeInputValue;
        const tdOriginalCost = document.createElement('td');
        tdOriginalCost.textContent = originalCostInputValue;
        const tdSellingPrice = document.createElement('td');
        tdSellingPrice.textContent = sellingPriceInputValue;

        const tdBtns = document.createElement('td');
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('action-btn');
        btnEdit.classList.add('edit');
        tdBtns.appendChild(btnEdit);
        btnEdit.textContent = 'Edit';
        btnEdit.addEventListener('click', function (e) {
            e.preventDefault();

            makeInput.value = makeInputValue;
            modelInput.value = modelInputValue;
            productionYearInput.value = productionYearInputValue;
            fuelTypeInput.value = fuelTypeInputValue;
            originalCostInput.value = Number(originalCostInputValue);
            sellingPriceInput.value = Number(sellingPriceInputValue);

            e.target.parentElement.parentElement.remove();

        });

        const btnSell = document.createElement('button');
        btnSell.classList.add('action-btn');
        btnSell.classList.add('sell');
        tdBtns.appendChild(btnSell);
        btnSell.textContent = 'Sell';
        btnSell.addEventListener('click', function (e) {
            e.preventDefault();

            const li = document.createElement('li');
            li.classList.add('each-list');

            const spanMakeAndModel = document.createElement('span');
            spanMakeAndModel.textContent = `${makeInputValue} ${modelInputValue}`;

            const spanYear = document.createElement('span');
            spanYear.textContent = `${productionYearInputValue}`;

            const spanPrice = document.createElement('span');
            spanPrice.textContent = `${sellingPriceInputValue - originalCostInputValue}`;

            li.appendChild(spanMakeAndModel);
            li.appendChild(spanYear);
            li.appendChild(spanPrice);

            ulCarList.appendChild(li);

            profit.textContent = (Number(profit.textContent) + sellingPriceInputValue - originalCostInputValue).toFixed(2);

            e.target.parentElement.parentElement.remove();

        });

        tr.appendChild(tdMake);
        tr.appendChild(tdModel);
        tr.appendChild(tdYear);
        tr.appendChild(tdFuel);
        tr.appendChild(tdOriginalCost);
        tr.appendChild(tdSellingPrice);
        tr.appendChild(tdBtns);

        tBody.appendChild(tr);
    });
}