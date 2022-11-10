function attachGradientEvents() {
    let gradientEl = document.getElementById('gradient');
    let resultEl = document.getElementById('result');

    gradientEl.addEventListener('mousemove', gradientMove);
    gradientEl.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = Math.floor((event.offsetX / (event.target.clientWidth - 1)) * 100);
        resultEl.textContent = `${power}%`;
    };

    function gradientOut(event) {
        resultEl.textContent = "";
    };

};