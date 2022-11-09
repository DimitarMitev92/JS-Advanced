function deleteByEmail() {
    const input = document.querySelector('input');
    const tBody = document.querySelector('tbody');
    const result = document.querySelector('#result');
    const rows = Array.from(tBody.children);
    let isFound = false;

    rows.forEach(row => {
        const email = row.children[1].textContent;
        if (email === input.value) {
            row.remove();
            isFound = true;
        }
    });

    if (isFound) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
};