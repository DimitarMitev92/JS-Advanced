function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = `${newItemText.value} ${newItemValue.value}`;
    const menu = document.getElementById('menu');
    menu.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}