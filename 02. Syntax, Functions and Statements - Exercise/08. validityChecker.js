function validityChecker(x1, y1, x2, y2) {
    function valid(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance % 1 === 0 ? 'valid' : 'invalid'}`);
    };
    valid(x1, y1, 0, 0);
    valid(x2, y2, 0, 0);
    valid(x1, y1, x2, y2);
};