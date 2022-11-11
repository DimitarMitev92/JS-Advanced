function focused() {
    let inputElementArray = Array.from(document.querySelectorAll('input'));
    inputElementArray.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }
    function onBlur(event) {
        event.target.parentNode.classList.remove('focused');
    }
}