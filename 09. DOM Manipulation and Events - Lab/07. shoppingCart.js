function solve() {

    const btnAddProduct = Array.from(document.querySelectorAll('.add-product'));
    const btnCheckout = document.querySelector('.checkout');
    const textArea = document.querySelector('textarea');

    let totalSum = 0;
    let productsArr = [];

    const takeProductAndPrice = function (e) {
        const productName = e.target.parentElement.parentElement.children[1].children[0].textContent
        const priceValue = Number(e.target.parentElement.parentElement.children[3].textContent)

        if (productsArr.includes(productName)) {
            totalSum += priceValue;
            textArea.value += `Added ${productName} for ${priceValue.toFixed(2)} to the cart.\n`
        } else {
            productsArr.push(productName);
            totalSum += priceValue;
            textArea.value += `Added ${productName} for ${priceValue.toFixed(2)} to the cart.\n`
        }
    }

    const printCheckoutResult = function (e) {
        textArea.value += `You bought ${productsArr.join(', ')} for ${totalSum.toFixed(2)}.\n`;
        disableButtons();
    }

    function disableButtons() {
        let buttons = Array.from(document.querySelectorAll('button'));
        buttons.forEach(button => button.disabled = true);
    }

    btnAddProduct.forEach(btn => {
        btn.addEventListener('click', takeProductAndPrice)
    });

    btnCheckout.addEventListener('click', printCheckoutResult);
}