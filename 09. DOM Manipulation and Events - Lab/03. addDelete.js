function addItem() {
    let newElement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if (newElement.length === 0) return;

    let listItem = document.createElement('li');
    listItem.textContent = newElement;

    let anchorDel = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');

    anchorDel.appendChild(linkText);
    anchorDel.href = '#';
    anchorDel.addEventListener('click', deleteItem);

    function deleteItem() {
        listItem.remove();
    }

    listItem.appendChild(anchorDel);
    list.appendChild(listItem);

};